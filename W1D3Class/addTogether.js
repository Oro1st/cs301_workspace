let prompt = require('prompt-sync')();

let value = +prompt('Enter price of the house:  ');
sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);