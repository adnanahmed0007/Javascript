// //declare
// var a="S";
// var a='';
// console.log(a)
// // hwere we can re declare the varibale with var
// let a;
// //let a;
// console.log(a)
// // here we can redeclare we have to can deckare bit in otgher scope
//  let a1;
// function redecl()
// {
//      a1="boy";
//     console.log(a1)
     
//     if(true)
//     {
//    let  a1="hello";
//     console.log(a1);
//     }
//     console.log(a1)
// }
//  redecl()
 //here we can chnage the let bit in oitger scope bit not i same
//chat_gpt
var a = "S";
var a = '';   // ✅ allowed (var can be redeclared in the same scope)
console.log(a); // prints ''
let a3; 
// let a3;   ❌ Not allowed in the same scope
console.log(a3); // prints undefined
let a2;

function redecl() {
    a2 = "boy";         // reassigns the outer a1 (declared above function)
    console.log(a2);    // boy

    if (true) {
        let a2 = "hello";   // ❗ new variable (block scope only)
        console.log(a2);    // hello
    }

    console.log(a2);    // boy (outer a1, unchanged by block variable)
}
redecl();