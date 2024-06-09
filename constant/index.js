//  const = a variable that can't be changed 

const PI = 3.14;
let radii;
let ans;

document.getElementById("raddisubmit").onclick = function(){
    radii = document.getElementById("myradii").value;
    radii = Number(radii);
    console.log(radii);
    ans = 2 * PI * radii;
    document.getElementById("ans").textContent = ans + "cm";
}