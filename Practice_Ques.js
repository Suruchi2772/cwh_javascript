//Question - 01
// Area and Circumference of circle
// let radius = 4.8;
// console.log("Area of circle : ", 3.14 * radius * radius);
// console.log("Area of circumference : ", 2*3.14 * radius );

// Question - 02
// Print a ASCII Value of a character
// let variable1 = 'a45';
// let variable2 = variable1.charCodeAt(1);
// console.log("ASCII value of", variable1, "is", variable2);

//Question - 03
// Area of triangle
// let base = 3, height = 5;
// console.log((1 / 2) * base * height);

//Question - 04
//Ye hhumaro smjh ke  pare hai

//Question - 05
// Simple Interest
// let p = 20000, r = 2, t = 5;
// console.log("Simple Interest : ", (p * r * t) / 100);

//Question - 06
//Calculate the Gross salary of an employee
// let base_salary = 20000;
// let bonus = (base_salary * 20) / 100;
// console.log("Gross Salary : ", base_salary + bonus);


//Question -07
//Average of Five Subjects
// let sub1 = 88, sub2 = 65, sub3 = 89, sub4 = 78, sub5 = 77;
// total = sub1 + sub2 + sub3 + sub4 + sub5;
// console.log("Average of five subjects : ",total / 5);

//Question - 08
// Celcius to farenhite conversion
// let temp_c = 23;
// let temp_f = (temp_c * 1.8) + 32;
// console.log("Temperature in Farahenite :", temp_f);

//Question - 09
//Check datatype of a variable
// let variable1 = null;
// console.log(typeof variable1);

//Question - 10
//Calculate Factorial
// let num = 20;
// let fact = 1;
// for (let i = num; i > 1; i--){
//     fact = fact * i;
// }
// console.log("Factorial : ", fact);

//Question - 11
//Calculate LCM
// let num1 = 4, num2 = 10;
// let min, max,i;
// if (num1 > num2) {
//     min = num2;
//     max = num1;
// } else {
//     min = num1;
//     max = num2;
// }

// for (i = 1; (max * i)% min != 0; i++) {
//     lcm = max * i;
// }
// lcm = max * i;
// console.log("L.C.M. is ", lcm);

// Question - 12
// Calculate HCF
// let number1 = 12, number2 = 19,hcf;

// for (let i = 1; i <= number1 && i <= number2; i++){
//     if (number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }
// console.log("HCF is", hcf);

// Question - 13
// Find greatest among three number
// let num1 = 2, num2 = 7, num3 = 9;
// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log(num1,"is the greatest number.");
//     }
//     else {
//         console.log(num3, "is the greatest number.");
//     }
// }
// else if(num2>num3){
//     console.log(num2, "is the greatest number.");
// }
// else {
//     console.log(num3, "is the greatest number.");
// }

// Question - 14
//Check whether a no is positive or negative
// let num = 4;
// if (num < 0) {
//     console.log("Number is negative.");
// }
// else {
//     console.log("Number is positive.");
// }

//Question - 15
// let alpha = "t";
// if (alpha == 'a' || alpha == 'e' || alpha == 'i' || alpha=='o' || alpha == 'u') {
//     console.log("Vowel");

// }
// else {
//     console.log("consonant");
// }

//Question - 16
// let character = "";
// let A = "A", Z = "Z", a = "a", z = "z";
// ascii_val = character.charCodeAt();
// if ((ascii_val >= A.charCodeAt() && ascii_val <= Z.charCodeAt()) || (ascii_val >= a.charCodeAt() && ascii_val <= z.charCodeAt())) {
//     console.log("Yes, it's an alphabet");
// } else {
//     console.log("No, it's not an alphabet");
// }

//Find the no of special characters,alphabets(uppercase and lowercase) and numbers
let str = "Suru@1234";
let A = "A", Z = "Z", a = "a", z = "z", s = "0", e = "9";
let u_case = 0, l_case = 0, num = 0, s_char = 0;
let length = str.length;
for (let i = 0; i < length; i++){
    if (str.charCodeAt(i) >= A.charCodeAt() && str.charCodeAt(i) <= Z.charCodeAt()) {
        u_case += 1;
    }
    else if (str.charCodeAt(i) >= a.charCodeAt() && str.charCodeAt(i) <= z.charCodeAt()) {
        l_case += 1;
    }
    else if (str.charCodeAt(i) >= s.charCodeAt() && str.charCodeAt(i) <= e.charCodeAt()) {
        num += 1;
    }
    else {
        s_char += 1;
    }     
}

console.log("Uppercase :", u_case, "Lowercase : ", l_case, "Digits :", num, "Special Characters :", s_char);