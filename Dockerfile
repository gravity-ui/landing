FROM node:24-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV ASSET_PREFIX=https://storage.yandexcloud.net/gravity-landing-static
ENV NODE_ENV=production
ENV IS_CONTAINER_BUILD=true

RUN npm run build

RUN apk add --no-cache aws-cli

ENV AWS_DEFAULT_REGION=ru-central1
ENV AWS_EC2_METADATA_DISABLED=true
ENV AWS_REQUEST_CHECKSUM_CALCULATION=when_required
ENV AWS_RESPONSE_CHECKSUM_VALIDATION=when_required

RUN --mount=type=secret,id=s3_access_key_id \
    --mount=type=secret,id=s3_secret_access_key \
    export AWS_ACCESS_KEY_ID=$(cat /run/secrets/s3_access_key_id) && \
    export AWS_SECRET_ACCESS_KEY=$(cat /run/secrets/s3_secret_access_key) && \
    aws s3 sync .next/static s3://gravity-landing-static/_next/static/ \
    --endpoint-url=https://storage.yandexcloud.net/ \
    --cache-control "public, max-age=31536000, immutable" && \
    unset AWS_ACCESS_KEY_ID && \
    unset AWS_SECRET_ACCESS_KEY

FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static/media ./.next/static/media
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/src/content/local-docs ./src/content/local-docs
COPY --from=builder /app/public ./public

RUN apk add --no-cache curl bash

RUN addgroup -g 1001 app && \
    adduser -u 1001 -G app -S appuser && \
    chown -R appuser:app /app && \
    chmod +x /app/scripts/start.sh

USER appuser

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["/app/scripts/start.sh"]