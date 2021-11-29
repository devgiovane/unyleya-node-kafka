# Kafka with node

### About

● Uma empresa de Jogos Online deseja saber, durante um campeonato, qual a percepção dos usuários em relação ao jogo. A intenção é capturar tweets durante as partidas, e através de uma análise de sentimento, descobrir se o tweet é positivo e negativo.

● A análise de sentimento será baseada única e exclusivamente em uma lista de palavras positivas e outra lista de palavras negativas. O tweet que contiver uma ou mais palavras positivas será considerado um tweet positivo. Caso contrário, será verificado se tem uma ou mais palavras negativas. Caso não tenha nenhuma palavra das duas listas, o tweet é descartado.

● No final, será informado o número de tweets capturados, o número de tweets negativos e o número de tweets positivos.

### Commands

```bash
chmod +x config.sh
./config.sh
```

#### or

```bash
yarn install

docker-compose up -d

docker exec kafka_broker kafka-topics --create --bootstrap-server localhost:29092  --topic tweets --partitions 1 --replication-factor 1 --if-not-exists

yarn consumer
yarn producer
```
