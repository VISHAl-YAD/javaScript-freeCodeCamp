// .checked  = property that determines the checked state of an HTML checkbox or radio button element.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const isSub = document.getElementById("isSub");
const paymentD = document.getElementById("paymentD");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        isSub.textContent = "you are subscribed";
    }
    else{
        isSub.textContent = "you are not subscribed"; 
    }
    if(visaBtn.checked){
        paymentD.textContent = "you are using VISA card.";
    }
    else if(masterBtn.checked){
        paymentD.textContent = "you are using MASTER card.";
    }
    else {
        paymentD.textContent = "you are using PAYPAL.";
    }
}