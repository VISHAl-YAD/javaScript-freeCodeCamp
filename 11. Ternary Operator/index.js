//  trenary operator = a shorcut to if{} and else{} statements helps to assign a variable based on a condition 

// condition ? (codeIfTrue) : (codeIfFalse);

let age = 12;
let message = age >= 18 ? "You are adult" : "You are minor";
console.log(message);

let amount = 109;
let discount = amount >= 100 ? 10 : 0;
console.log(`Total Amount : $${amount - amount * (discount / 100)}`);