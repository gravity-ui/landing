#!/bin/sh
set -e

echo "Installing Yandex Cloud CLI..."

curl -sSL https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash

export PATH=$PATH:$HOME/yandex-cloud/bin

SECRET_ID="e6q2afdufj7scuv328to"

GITHUB_APP_ID=$(yc lockbox payload get --id $SECRET_ID --key app_id)
GITHUB_APP_INSTALLATION_ID=$(yc lockbox payload get --id $SECRET_ID --key installation_id)
GITHUB_APP_PRIVATE_KEY=$(yc lockbox payload get --id $SECRET_ID --key private_key)

export GITHUB_APP_ID
export GITHUB_APP_INSTALLATION_ID
export GITHUB_APP_PRIVATE_KEY

echo "Starting server..."
exec node server.js
