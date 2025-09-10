//lexical scop is the where the function can acess the varoiavle upto its scope
function scsopin()
{
 let a="aadna ahmedd";
 function innerscope()
 {
     
    console.log(a);
 }
 innerscope();
}
scsopin();
//
function moziaa()
{
    var a="adnan ahm12ed";
    function unneer()
    {
        console.log(a);
    }
    return  unneer;
}
var func=moziaa();
console.log(func())
//
function mozilagfss()
{
    var k="aravia";
    function inrre(num)
    {
        console.log(k+" "+num);
    }
    return inrre;
}
 console.log(moziaa());// chcek output
 mozilagfss()(8)
//closure chain
const gtr=110;
function sum()
{
    return function aas(b)
    {
         return function iner(c)
         {
            return function idds(d)
            {
                console.log(b+c+d+gtr)
            }
            
         }
    }

}
//if we simply console.log (sum())
// console.log(sum())
// console.log(sum()())
// console.log(sum()()())
// console.log(sum()()()(9))
sum()(1)(7)(8)
///
// global scope
 const e1 = 10;   // declare first
function sum1(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e1;
      };
    };
  };
}

console.log(sum1(1)(2)(3)(4)); // 20
// oyyuput
let count=0;
(function souto ()
{
if(count==0)
{
     let count=1;
    console.log(count)
}
console.log(count)
})();
 //output
 function createbase(num)
 {
    let k=num;
    function add(num1)
    {
        console.log(num1+k);
    }
  return add;
 } 
 createbase(8)(9)
 createbase(18)(-89)
 //outpit
 function indx(index)
 {
      temp=[];
    for( i=0;i<1000;i++)
    {
      temp[i]=i*i;
        
    }
    console.log(temp[index]);
 }
 console.time("50")
 indx(50);
 console.timeEnd("50");
  
 //time optizamtion of above one

 function index122(){
    let temp=[];
    for(i=0;i<100000;i++)
    {
        temp[i]=i*i;
    }

    return function(index)
    {
        console.log(temp[index])
    }
 }
 const closure=index122();
 
  console.time("50");
 closure(50);
 console.timeEnd("50");
 //sett
 (function sryss(num)
{
    for( var i=0;i<=num;i++)
    {
    setTimeout(()=>
    {
        console.log(i)

    },i*10)
}

})(3)//
////
 function asqq(num)
 {
    for(let i=0;i<num;i++)
    {
        setTimeout(() => {
            console.log(i);
        }, i*100);
    }
 }
//asqq(10);
///

 //Closure
 function ass(num)
 {
    for(var i=0;i<num;i++)
    {
     function closyue9(i)
     {
        setTimeout(()=>
        {
            console.log(i)

        },i*100)
     }
      closyue9(i);
     
   
    }

}
ass(18)