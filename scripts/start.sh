#!/bin/sh
set -e

echo "Installing Yandex Cloud CLI..."

curl -sSL https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash

export PATH=$PATH:$HOME/yandex-cloud/bin

SECRET_ID="e6q2afdufj7scuv328to"
OPENAI_SECRET_ID="e6qu1j3jn6msvmv7lqj6"

GITHUB_APP_ID=$(yc lockbox payload get --id $SECRET_ID --key app_id)
GITHUB_APP_INSTALLATION_ID=$(yc lockbox payload get --id $SECRET_ID --key installation_id)
GITHUB_APP_PRIVATE_KEY=$(yc lockbox payload get --id $SECRET_ID --key private_key)
OPENAI_API_KEY=$(yc lockbox payload get --id $OPENAI_SECRET_ID --key openai_api_key)
OPENAI_MODEL=$(yc lockbox payload get --id $OPENAI_SECRET_ID --key openai_model)
OPENAI_BASE_URL=$(yc lockbox payload get --id $OPENAI_SECRET_ID --key openai_base_url)
OPENAI_PROMPT_ID=$(yc lockbox payload get --id $OPENAI_SECRET_ID --key openai_prompt_id)

export GITHUB_APP_ID
export GITHUB_APP_INSTALLATION_ID
export GITHUB_APP_PRIVATE_KEY
export OPENAI_API_KEY
export OPENAI_MODEL
export OPENAI_BASE_URL
export OPENAI_PROMPT_ID
export TRANSFORMERS_CACHE_DIR=/app/.model-cache

echo "Starting server..."
exec node server.js
