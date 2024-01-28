import timers from 'timers/promises';

console.info(new Date());
const name = await timers.setTimeout(2000, 'John');

console.info(new Date());

console.info(name);

for await(const startTime of timers.setInterval(5000, "ignored")) {
    console.info(new Date());
}