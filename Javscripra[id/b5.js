//IIFE 
//Immediately invoke Functiin expressiin its executes after the creatioin
(function ()
{
    console.log("helq1lo")
})()
let ar=[1,2,3,4,54];
var k=ar.forEach((value,index)=>
{
    return value*index;
})
console.log(ar)
 //closure
 function outerfunctio()
 {
    let k="jelloga";
    function inner()
    {
        console.log(k);
    }
    return inner;
 }
 const data=outerfunctio();
 data();
 //
 function outeree()
 {
    let count=0;
    return {
        increament:function()
        {
            count++;
            return count;
        }
         ,
         decreament:function()
         {
            count--;
            return count;
         },
         current:function()
         {
            return count;
         }
    }
 }
 const closureq=outeree();
 closureq.increament();
 console.log(closureq.increament())
 closureq.current();
 console.log(closureq.current())
 
 console.log( closureq.decreament())
  console.log( closureq.decreament())
   console.log( closureq.decreament())
    console.log( closureq.decreament())
 
