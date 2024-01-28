import net from 'net';

const client = net.createConnection({port: 8080, host: 'localhost'});

client.addListener('data', (data) => {
    console.info(`Receive Data: ${data.toString()}`);
});

setInterval(() => {
   client.write('Hello World!\r\n'); 
}, 2000);