//polyfill once
function once(fnc,context)
{
    let ran;
    return function ()
    {
        if(fnc)
        {
            ran=fnc.apply(context||this,arguments);
            fnc=null;
        }
        return ran;
    }
}
const hello=once((a,b)=>
{
    console.log("hello"+""+a+b)
})
hello(1,2)
hello()
hello()
 