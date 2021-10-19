const redis = require("redis");
const { topic, bootstrap } = require("./common");

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

bootstrap(client, 'PUBLISHER');

const newUser = {
    name: "User Name",
    email: "user@email.com"
};

client.publish(topic, JSON.stringify(newUser));



