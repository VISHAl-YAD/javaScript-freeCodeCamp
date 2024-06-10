// Random Number Generator

// from 1 to 6
let random = Math.trunc(Math.random() * 6) + 1;
console.log(random);
/* 
    1. here Math.random() generates random number from 0 to 1. (all say that it the difference between max and min and add it by 1)(max - min + 1)

    2. Math.trunc() used to eleminated decimal number and only get interger number.

    3. * 6 used to specify end number here it goes from 0 to 5.

    4. + 1 used to add 1 to random generated number.

*/

function randomRange(max , min){
    min = Math.trunc(min);
    max = Math.trunc(max);
    return Math.trunc(Math.random() * (max - min +1)) + min;
}

let min = 95;
let max = 100;

console.log(randomRange(max , min));

let dice ;
document.getElementById("mybutton").onclick = function(){
    dice = document.getElementById("disp").textContent = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
}
