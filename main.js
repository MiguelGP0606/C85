nameOfStudentArray = [];

function submit() {

var displayStudentArray = [];

for (var j= 1; j <= 4; j++)
{

var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).vaule;
console.log(nameOfTheStudent);
nameOfStudentArray.push(nameOfTheStudent);

}

console.log(nameOfStudentArray);

var lenghtOfNameOfStudentArray = nameOfStudentArray.lenght;
console.log(lenghtOfNameOfStudentArray);

for (var k= 0; k < lenghtOfNameOfStudentArray; k++ )

{

displayStudentArray.push("<h4> NOME - " + nameOfTheStudentArray[k] + "</h4>");
console.log(displayStudentArray);

}

console.log(displayStudentArray);
document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

var removeCommas = displayStudentArray.join(" ");
console.log(removeCommas);
document.getElementById(displayNameWithoutCommas).innerHTML = removeCommas;

document.getElementById("submitButton").style.display = "none";

}
