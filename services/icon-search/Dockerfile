FROM python:3.12-slim AS base

WORKDIR /app

COPY pyproject.toml .

RUN pip install --no-cache-dir . \
    && rm -rf /root/.cache/pip

COPY app/ app/
COPY data/embeddings.npy data/embeddings.npy
COPY data/icon_index.json data/icon_index.json

EXPOSE 8080

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
