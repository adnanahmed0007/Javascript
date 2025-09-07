//Scope of var let and const
var a=9;
console.log(a)
{
    var k=1;
}
console.log(k)
//var is a global scople where as let and const is block scople
{
    let s=2;// as its is block scople
    console.log(s)
}
// console.log(s)//this will give eroor as its is block scople
{
    const s1=3;//this will also give error as it has a block scope and not the global scope;
    console.log(s1)
} 
 //console.log(s1) this vwill give error
 console.log(g);
 var g="89";
 console.log("j"+j)
if(true)
{
    var j=0;
    console.log(j)
}
console.log(h)
if(true)
{
    let h=1;
}