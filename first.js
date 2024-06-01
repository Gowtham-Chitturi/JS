// // Arthimetic operators
// let a = 5;
// let b = 4;


// console.log("a+b=", a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a % b);
// console.log(a++);
// console.log(a);
// console.log(a += b);

// console.log("GT")

// //looping and strings

// for (let i = 0; i <= 50; i++) {
//     console.log("Giet college");
// }

// console.log("loop has handed");

// //calculate sum of 1 to 5

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum=", sum);

// //print 1 to 5

// for (let i = 1; i <= 5; i++) {
//     console.log("i=", i);
// }

// //while loop

// let i = 1;
// while (i <= 5) {
//     console.log("i=", i);
//     i++;
// }

// //do while
// let j = 1;

// do {
//     console.log("j=", j);
//     j++;

// } while (j <= 5);


// //for-of-loop

// let str = "Giet college";

// //Example




// let size = 0;
// for (let i of str) {
//     console.log("i=", i);
//     size++;
// }
// console.log("strind size= ", size); 

//for in loop

// let student = {
//     nama: "Gowtham",
//     age: 20,
//     ispass: true,
// };

// for (let key in student) {
//     console.log("key=",key,"value=",student[key]);
// }

//Even numbers 0 -100

// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
//         //even number
//         console.log("num=", num);
//     }
// }


//practice

// let gameNum = 25;

// let userNum = prompt("guess the game number :");

// while (userNum != gameNum) {
//    userNum= prompt("you enter wrong number.guss again :");

// }

// console.log("congratulations, you entered correct");

//Strings

// let str = "gowtham";
// let str2 = 'Gowtham';

// console.log(str[2]);

// //template Literals
// let obj = {
//     item : "pen",
//     cost : 10,
// };

// let output = `the cost of ${obj.pen} is ${obj.cost} rupees`;
// console.log(output);

// console.log("cost of ",obj.item,"is" ,obj.cost,"rupees");

//Template literals


// let disply = `this is template literal ${1 + 2 + 3 }`;
// console.log(disply);

// console.log("Gowtham \n Chitturi");
// console.log("Geetha \t chituri");


// let str = "Gowtham.. .  . . .!"
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());

// let str="012345";
// console.log(str.slice(1,5));
// console.log(str.slice());

// let str1="apna";
// let str2="college";

// let res=str1 + str2;

// console.log(res);

//replace
// let str="Gajala";
// console.log(str.replace("G","y"));

//charAt

// let str="Gowtham";
// console.log(str.charAt(1));

//Arrays

// let marks= {
//     stu1:87,
//     stu2:32,
// }

// let marks=[23,45,45,6,55,7];
// console.log(marks);
// console.log(marks.length);

//loping over an array

// let heroes = [ "kaya", "gajala", "spider", "rider"];
// for (let idx = 0; idx < heroes.length; idx++) {
//     console.log(heroes[idx]);
// }

//for of

// for(let hero of heroes){
//     console.log(hero.toUpperCase);
// }