const buffer = Buffer.from('Hello World!', 'utf-8');

console.info(buffer.toString());
console.info(buffer.toString('hex'));
console.info(buffer.toString('base64'));

const buffer2 = Buffer.from('SGVsbG8gV29ybGQh', 'base64');
console.info(buffer2.toString('utf-8'));