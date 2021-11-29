const { Kafka } = require('kafkajs');

const positives = [
    'bom', 'legal', 'show'
];

const negatives = [
    'ruim', 'mal', 'enjoativo'
];

(async () => {
    let couter = 0, positive = 0, negative = 0;

    const kafka = new Kafka({
        clientId: 'tweets',
        brokers: [ 'localhost:29092' ]
    });

    const consumer = kafka.consumer({ groupId: 'tweets-consumer' });

    await consumer.connect();
    await consumer.subscribe({ 
        topic: 'tweets',
        fromBeginning: true
    });

    await consumer.run({
        eachMessage: async ({ message }) => {
            couter++;
            let isPositive = false;
            const newMessage = message.value.toString().toLowerCase();
            for(let letter of positives) {
                if(newMessage.includes(letter)) {
                    positive++;
                    isPositive = true;
                }
            }
            if(!isPositive) {
                for(let letter of negatives) {
                    if(newMessage.includes(letter)) {
                        negative++;
                    }
                }
            }
            console.log(`Tweets capturados: ${couter}, negativos: ${negative}, positivos: ${positive}`);
        }
    });

})();