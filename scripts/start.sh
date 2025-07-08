#!/bin/sh
set -e

echo "Installing Yandex Cloud CLI..."

curl -sSL https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash

export PATH=$PATH:$HOME/yandex-cloud/bin

SECRET_ID="e6qp8gufihlh6vcsoa5a"

GITHUB_TOKEN=$(yc lockbox payload get --id $SECRET_ID --key github_token)

echo "Starting server..."
GITHUB_TOKEN=$GITHUB_TOKEN exec node server.js
