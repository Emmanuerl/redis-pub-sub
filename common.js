exports.bootstrap = function (client, serverName) {
    client.on("err", err => {
        console.log(serverName, 'error connecting to redis', err);
    });

    client.on("connect", () => {
        console.log(serverName, 'connection established to redis');
    });

    client.on('ready', () => {
        console.log(serverName, 'is now ready.');
    });

    return client;
};

exports.topic = 'newUser';