#!/bin/bash

yarn install

docker-compose up -d

docker exec kafka_broker kafka-topics --create --bootstrap-server localhost:29092  --topic tweets --partitions 1 --replication-factor 1 --if-not-exists

yarn producer

yarn consumer