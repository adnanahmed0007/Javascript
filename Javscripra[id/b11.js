const { chownSync } = require("fs");

//synchrounot in asycxrou the codes execute line by line
for(var i=0;i<8;i++)
{
    console.log(i);
}
console.log(89+" "+"mm");
console.log("nn")
//asynscrup code does not excute ine by line
console.log("start");
setTimeout(()=>
{
console.log("he;;o")
},2000)
console.log("end")
