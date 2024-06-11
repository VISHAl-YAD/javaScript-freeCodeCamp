//  IF Statement

// let age  = 19;
// if(age >= 18){
//     console.log("You are an adult!");
// }
// else{
//     console.log("You are not an adult!");
// }

let marks;
document.getElementById("mySubmit").onclick = function(){
    marks = document.getElementById("myInput").value;
    if(marks == 90){
        document.getElementById("myGrade").textContent = "Grade : ";
        document.getElementById("dispGrade").textContent = "A";
    }

    else if (marks >= 80 && marks < 90){
        document.getElementById("myGrade").textContent = "Grade : ";
        document.getElementById("dispGrade").textContent = "B";
    }

    else if (marks >= 70 && marks < 80){
        document.getElementById("myGrade").textContent = "Grade : ";
        document.getElementById("dispGrade").textContent = "C";
    }

    else if (marks >= 60 && marks < 70){
        document.getElementById("myGrade").textContent = "Grade : ";
        document.getElementById("dispGrade").textContent = "D";
    }

    else if (marks >= 50 && marks < 60){
        document.getElementById("myGrade").textContent = "Grade : ";
        document.getElementById("dispGrade").textContent = "E";
    }

    else {
        document.getElementById("myGrade").textContent = "Grade : ";
        document.getElementById("dispGrade").textContent = "F";
    }


}

