import {Console} from 'console';
import fs from 'fs';

const logFile = fs.createWriteStream('console.log');

const log = new Console({
    stdout: logFile,
    stderr: logFile
});

log.info('Hello Console!');
log.error('Error Console!');

const person = {
    firstName: 'John',
    lastName: 'Doe',
};

log.table(person);