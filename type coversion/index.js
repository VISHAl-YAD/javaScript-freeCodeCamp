// type conversion = change the  datatype of a value to another
//                   (string, number, booleans)


let age = window.prompt("How old are you?");
// age as string
age += 1
console.log(age, typeof age);
document.getElementById("myh1").textContent = age , typeof typeof age;

// age as number
age = Number(age);
age += 1;
console.log(age, typeof age);
document.getElementById("myh1").textContent = age , typeof typeof age;

// num as string
let num = window.prompt("number: ");
console.log(num, typeof num);
document.getElementById("myh2").textContent = num , typeof typeof num;


let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
