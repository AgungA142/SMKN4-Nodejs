import net from 'net';

const server = net.createServer((client) => {
    console.info('Client connected');
    client.addListener('data', (data) => {
        console.info(`Receive Data: ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    });

});

server.listen(8080, 'localhost');