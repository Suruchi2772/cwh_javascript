var a = 67;
var a = 56; //this will not throw an error
//redeclaring a variable by using var is allowed
console.log("Before block");
console.log("a = " + a); 
let b = "suruchi";
console.log("b = " + b); 
//let b = 89; this will throw an error
//redeclaring a variable by using let is not allowed but if we want to assign another value than it's possible

{
    console.log("In block");
    var a = 90;  // this will globally change the value of not only for this block 
    console.log("a = " + a); 
    let b = 45;  // this wouldn't change the global scope of b
    console.log("b = " + b); 
    //scope of b is only in this block
}
console.log("After block");
console.log("a = " + a); //a has changed 
console.log("b = " + b); // but b will not change

//const c; this will throw an error as const should be initialized while declaring
const c = 45;
//c = 67; this will throw error as if you are going to reassign any value to const as you can only assign const once

//let c; this will also throw error

// summary
// 1. var
//     It has global scope .
//     You redeclare the variable in same scope.
// 2. let
//     It doesn't have  global scope .
//     You  can't redeclare the variable in same scope, but you can reassign it.
// 2. const
//     It doesn't have  global scope .
//     You have to do assignment while declaring.
//     You  can't redeclare the variable in same scope neither you can reassign it.









