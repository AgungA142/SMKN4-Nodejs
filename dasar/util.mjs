import util from 'util';

const name = 'Tony';
const lastName = 'stark';

console.info(util.format('Hello %s %s', name, lastName,));

const person = {
    name: 'John',
    lastName: 'Doe',
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format('Hello %j', person));
