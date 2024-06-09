// Math = built-object that provides a collection of properties and methods
// ex. Math.PI, Math.E
console.log(Math.PI);
console.log(Math.E);


// All this only used for foat numbers only not for integer numbers
// Math.round() : used to round the number according to the decimal numbers
let x =3.1;
let z = Math.round(x);
console.log(`round : `,z);

// Math.floor() : used to round down the number
let a = Math.floor(x);
console.log(`floor : `, a);

// Math.ceil() : used to round up the number
let b = Math.ceil(x);
console.log(`ceil : ` ,b);

// Math.trunc() : used to eliminate the decimal numbers
let c = Math.trunc(x);
console.log(`trunc : ` ,c);

// Math.pow(x , y) : used like this x^^y
let j = 2;
let k = 3;
let d = Math.pow(j ,k);
console.log(`Pow : ` ,d);

// Math.sqrt(j) : square root of j
let e = Math.sqrt(j);
console.log(`Sqrt : ` ,e);

/*
More exampl :
Math.log()
Math.sin()
Math.cos()
Math.tan()
Math.abs() absolute value of number if -3.21 then it will be 3.21
*/

// Math.max(_,_,_) similar Math.min(_,_,_)
let max = Math.max(x,j,k);
console.log(`max : `, max);