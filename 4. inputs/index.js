document.getElementById("myh1").textContent = "User's Inputs";

// How to get user inputs?
// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

// WINDOW PROMPT

/* let username;
 username = window.prompt("What's Your Username?");
 console.log(username);
*/


// professiional way
let username ;
document.getElementById("mysub").onclick = function(){
    username = document.getElementById("myinput").value;
    document.getElementById("myh2").textContent = `Hello ${username}`;
    console.log(username);
}