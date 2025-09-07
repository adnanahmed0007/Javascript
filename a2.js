//shadwoing in js
function testHello()
{
    let a="boy";
    if(true)
    {
       let a="girl";//  new "a" created ONLY inside this block
        console.log(a); //here git;
    }
    console.log(a) //here itw will print boy only
}
testHello();
//above we are creatunga new varaivle a for this is block only and this wil; run in this scope onl,y
//in this the new varaivle is created onky for thi if blokc 



function test2Hello()
{
    let a="boy";
    if(true)
    {
        a="girl";// ❗ reassigns the SAME outer variable
        console.log(a); //here git;
    }
    console.log(a) //here itw will print girlk because we havce reassign the value of a
}
 test2Hello();
 // here the javascripte loks upwra as we are  changing the va;ue of any variable
