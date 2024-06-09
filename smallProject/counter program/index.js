const DEC = document.getElementById("decbtn");
const RES = document.getElementById("resbtn");
const INC = document.getElementById("incbtn");

let countLabel = document.getElementById("countLabel");

let count = 0;

INC.onclick = function(){
    count++;
    countLabel.textContent = count;
}

DEC.onclick = function(){
    count --;
    countLabel.textContent = count;
}

RES.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}