const { Kafka } = require('kafkajs');

(async () => {
    const kafka = new Kafka({
        clientId: 'tweets-producer',
        brokers: [ 'localhost:29092' ]
    });
    
    const producer = kafka.producer();
    
    await producer.connect();
    
    const tweets = [ 
        { value: 'Muito bom gostei' },
        { value: 'Meio enjoativo, sem ação' },
        { value: 'Bem legal' }
    ];
    
    await producer.send({
        topic: 'tweets',
        messages: tweets
    });
    
    await producer.disconnect();
})();