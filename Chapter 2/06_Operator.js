let a = 10;
let b = 7;

//-------------Arithmetic Operator---------------
console.log("a + b = ", a + b);  // addition krne ke liye 
console.log("a - b = ", a - b);  //subtraction krne ke liyw
console.log("a / b = ", a / b);  // division krne ke liye
// Note: here division operator will not work like c language it will show value in decimal
console.log("a * b = ", a * b); // multiplication operator
console.log("a % b = ", a % b); // modulo operator
console.log("a ** b = ", a ** b); //exponential operator
// Note: a**b operator means a to the power b

console.log("++a = ", ++a); //11 a=11
console.log("a++ = ", a++); //11 a=12
console.log("--a = ", --a); //11 a=11
console.log("a-- = ", a--); //11 a=10
console.log("a = ", a); //10 a=10
console.log("a-- = ", a--);//10 a=9

//-------------Assignment Operator---------------
//= += -= /= %= *= **=

let c = 23; 
console.log("c += 2 ->",c += 2);
console.log("c -= 1 ->",c -= 2);
console.log("c *= 3 ->",c *= 2);
console.log("c /= 6 ->",c /= 2);
console.log("c %= 4 ->",c %= 2);
console.log("c **= 5 ->", c **= 2);

//-------------Comparison Operator---------------

let d = 20;
let f = "20";
console.log("d == f ", d == f);
// output : true 
console.log("d != f ", d != f);
// output : false 
console.log("d === f ", d === f); // returns true only if the value as well as type is same 
// output : false 
console.log("d !== f ", d !== f); // returns true only if the value as well as type is not same
// output : true 
console.log("d > f ", d > f);
console.log("d < f ", d < f);
console.log("d >= f ", d >= f);
console.log("d <= f ", d <= f);
console.log("!d ", !d);

//-------------Logical Operator---------------

let g = 23;
let h = 34;
console.log("g<h && h", g<h && g<h);
console.log("g || h", g || h);
console.log("!h", !h);

/*
    last topic of this lecture is comments 
    comments can be single line or multi - line 
    single line comment can be seen as above 
    and multi-line comment is used to commment this last comment topic.
*/









