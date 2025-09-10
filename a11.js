const resulkt=function (num){
    return num*num;

}
console.log(resulkt(7))
//abve this is annonumous function as it does not have any  name
const arraow=(num)=>
{

    return  num*num;
}
 console.log(arraow(6))
 //first class functin are tje fubction where fubcyion is yreated like variable
 function square(num)
 {
    return num*num;
 }
 function decsiuare(fn)
 {
    console.log("square number"+" "+fn(5));
 }
 decsiuare(square)
 //
 function Desire(fn)
 {
    console.log("sqaure is" +fn);
 }
 Desire(square(8))
 //IIFE imediatelky invoke function excetuon
 function odd(num)
 {
    if(num%2==0)
    {
        console.log(num)
    }
 }
 odd(16);
 // With IIFE A we can wrap in
(
    function square(num)
    {
         if(num%2==0)
         {
            console.log(num)
         }
    }
)(12);
//
(
    function(x)
    {
         return(function(y)
        {
            console.log(x)
        })(2);
    }
)(1);
//explame
 for(var i=0;i<10;i++)
 {
    setTimeout(function()
{
    console.log(i)

},i*100)
 }
 //it will give differct outuou 
 for(let i=1;i<10;i++)
 {
    setTimeout(()=>
    {
        console.log(i)
    },i)
 }
 //it will give durrecr 
 //function hsotin
 host()
 function host()
 {console.log(x)
    var x=0;
    console.log("hello");
 }//we cab get outipy as th fuctio is intuiavlixe in function its complety [ssed in cfeatuon pagse]
var x=21;
var func=function()
{
    console.log("value"+x)
    var x=20;
}
func();
// bar()
// var bar=()=>
// {
//     console.log("helloi")
// } throw an errr auts varibale 