import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

eventEmitter.addListener("Hello", (name) => {
    console.info("Hello " + name);
});

eventEmitter.addListener("Hello", (name) => {
    console.info("Halo " + name);
});

eventEmitter.emit("Hello", "John");