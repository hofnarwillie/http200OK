#!/usr/bin/env bash

trap 'docker-compose down' EXIT

docker-compose up -d --build app
docker-compose up --build --exit-code-from test test
