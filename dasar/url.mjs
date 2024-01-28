import {URL} from 'url';

const myURL = new URL('https://example.org');

myURL.host = 'example.com';
myURL.searchParams.append('name', 'John Doe');

console.info(myURL.toString());
console.info(myURL.href);
console.info(myURL.host);
console.info(myURL.protocol);
console.info(myURL.pathname);
console.info(myURL.searchParams);