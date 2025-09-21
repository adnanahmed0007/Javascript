//varviable hosting
console.log(a);
var a;
// function hosting
adhs();
function adhs()
{
    console.log("11a")
}
//var let const
if(true)
{
    var a="a";
    let b="b";
    const c="c";
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
    // console.log(b);
    // console.log(c);
    //error bescaue ys has blocked scope;
// function varca()
// {
//     var k="kl";
// }
//  console.log(k)
// varca()// here var is function scope
function varca()
{
    var k="kl";
    console.log(k)
}
varca()
 k="90";
 console.log(k)// gree k is glkovla variab;e and its not var let const