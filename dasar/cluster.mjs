import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if(cluster.isPrimary) {
    console.info(`Primary : ${process.pid}`);
    for(let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", (worker) => {
        console.info(`Worker ${worker.process.pid} died`);
    });
}

if(cluster.isWorker) {
    console.info(`worker : ${process.pid}`);
    const server = http.createServer((request, response) => {
        response.write(`Worker ${process.pid} handle request`);
        response.end();
        process.exit();
    });
    server.listen(8080);
}
