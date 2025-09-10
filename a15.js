//private counter we dont durectky increase the counter we use a function
function counter()
{
    var _counter=0;
    function  add(increamnet)
    {
        _counter+=increamnet;
    
    }
    function retrive()
    {
        return " counter +="+ _counter;
    }
    return {
        add,
        retrive,
    }
}
 
// var closure= counter();
// closure.add(10);
// closure.add(15);
// var k=closure.retrive()
// console.log(k)
//
function counuter()
{
    var _counter1=0;
    function add(increament)
    {
        _counter1+=increament;
    }
    function returyve1()
    {
        return "counter"+_counter1;
    }
    return {
        add,
        returyve1,
    }
}
var closure=counuter();
closure.add(89);
closure.add(100);
console.log(closure.returyve1())

//call once
let view;
function aoncecall()
{
    let count=0;
    return function()
    {
        if(count>0)
        {
            console.log("alreday called")
        }
        else{
            view="calling ";
            console.log(view);
            count++;
        }
            
    }
}
  var k=aoncecall();
  k();
  k();
 