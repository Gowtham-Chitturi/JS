let a = 3;
let b = 5;

if (a > b) {
    console.log("true");

}
else {
    console.log("false");
}

//odd or even

let num = 10;

if (num % 2 == 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

// if-else-if

let mode = "pink";
let color;

if (mode == "dark") {
    color = "black";
}
else if
    (mode == "pink") {
    color = "pink";
}
else if (mode == "gray") {
    color = "gray";
}
else {
    color = "white";
}
console.log(color);

if (mode == "pink") {
    console.log(mode);
}

//tenery

let age = 25;

let result = age >= 25 ? "fucker" : "chota wala";
console.log(result);

//practice

let num1 = prompt("enter a number:");

if (num1 % 9 == 0) {
    console.log("num is multiple of 9");
} else {

    console.log("num is  not multiple of 9");

}

//practice

let score = 32;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
}
else if (score >= 70 && score <= 89) {
    grade = "B";
}
else if (score >= 60 && score <= 69) {
    grade = "C";
}
else if (score >= 50 && score <= 59) {
    grade = "D";
}
else if (score >= 0 && score <= 49) {
    grade = "F"
}
console.log("acc to your score,your grade was:",grade);
