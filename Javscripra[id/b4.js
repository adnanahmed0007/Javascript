function higerorfderfunc(fn)
{
var k=fn()
     
}
higerorfderfunc(function lowerorder()
{
    console.log("hello")
})
//
 
function haughee(x)
{
      
    function multu(y)
    {
        console.log(x*y);
    }
   multu(9);
    
}
haughee(7);
 // hihger orfer function returing the functiomn
 function addgret(message)
 {
    return function (takevalkue)
    {
        console.log(`${message}  ${takevalkue}`)
    }
 }
 const greeting =addgret("hello");
 greeting("adnan");
 ///
 function table2( x)
 {
    return function (limit)
    {
        for(let i=0;i<=limit;i++)
        {
            console.log(x*i);
        }
    }
 }
 const balte55=table2(3);
 balte55(10);
/// map 
function vaew(x)
{
    return function (y)
    {
        const arr=Array.from({length:x+1},(_,i)=>i);
        arr.map((value)=>console.log(value*y));


    }
}
const returnaing=vaew(10);
returnaing(7);
const temp=Array.from({length:10},(_,i)=>i);// here we have ceated the array
console.log(temp)