FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV ASSET_PREFIX=https://storage.yandexcloud.net/landing-static
ENV NODE_ENV=production

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
    aws s3 sync .next/static s3://landing-static/_next/static/ \
    --endpoint-url=https://storage.yandexcloud.net/ && \
    unset AWS_ACCESS_KEY_ID && \
    unset AWS_SECRET_ACCESS_KEY

FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/next-i18next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/src/data ./src/data
COPY --from=builder /app/src/content/local-docs ./src/content/local-docs

RUN addgroup -g 1001 app && \
    adduser -u 1001 -G app -S appuser && \
    chown -R appuser:app /app
USER appuser

EXPOSE 3000

CMD ["npm", "start"]