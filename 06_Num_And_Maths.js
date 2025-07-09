// const score = 400;
// console.log(score);

// const balance = new Number(100.2546)
// console.log(balance);

// console.log(balance.constructor());
// console.log(balance.toExponential()); //The toExponential() method converts a number into an exponential notation
// console.log(balance.toFixed(2)); //toFixed() converts a number to a string, rounded to a specified number of decimals
// console.log(balance.toLocaleString()); //toLocaleString() returns a number as a string, using local language format
// console.log(balance.toPrecision(1)); //toPrecision() formats a number to a specified length
// console.log(balance.toString()); //When called on a number, toString() converts the numerical value into a string.
// console.log(balance.valueOf()); //valueOf() returns the primitive value of a number

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//Here +ve value is +ve only but -ve value becomes +ve
// console.log(Math.abs(4));
// console.log(Math.round(4.3));//Rounds off the value in an integer
// console.log(Math.ceil(4.2)); //The Math.ceil() method rounds a number rounded UP to the nearest integer.
// console.log(Math.floor(4.2)); //he Math.floor() method rounds a number DOWN to the nearest integer.
// console.log(Math.sqrt(144));

console.log(Math.random());//Math.random() value always lie between 0 and 1
console.log(Math.random()*10 ); //Return a random number between 0 (inclusive) and 10 (exclusive)
console.log(Math.random()*100 ); //Return a random number between 0 (inclusive) and 100 (exclusive)
console.log((Math.random()*10) + 1); //A random whole number between 1 and 10 (inclusive)
console.log(Math.floor(Math.random()*10) + 1);
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

