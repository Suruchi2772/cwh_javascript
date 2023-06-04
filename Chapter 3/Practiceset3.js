//Question - 01
// Write a program to print the marks of a student in an object using for loop
// obj={harry:98,rohan:70,suruchi:89}
// let obj = {
//     Harry: 98,
//     Rohan: 78,
//     Suruchi:89
// }

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

// for (let a in obj) {
//     console.log("Marks of", a, ":", obj[a]);
// }

// let num=prompt("Enter the number ");

// if(num!=123456){
//     while(num!=123456){
//         if(num<123456){
//             alert("Beta you have entered smaller number.......try again");
//             num=prompt("Enter the number ");
//         }
//         else{
//             alert("Beta you have entered larger number.......try again");
//             num=prompt("Enter the number ");
//         }
//     }
// }

//Question - 04
//Write a program to find mean of five no
let num1 = 23, num2 = 26, num3 = 45, num4 = 29, num5 = 30;
let mean = (a, b, c, d, e)=>{
    return ((a + b + c + d + e)/5);
}
console.log("Mean of five number is :",mean(num1, num2, num3, num4, num5));