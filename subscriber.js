const redis = require("redis");
const { topic, bootstrap } = require("./common");

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

bootstrap(client, 'SUBSCRIBER');

client.subscribe(topic); // subscribe to topic

client.on("message", (topic, data) => {
    console.log('channel name:', topic);
    console.log('new data received', JSON.parse(data));
});


