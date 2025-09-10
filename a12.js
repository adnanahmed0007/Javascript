 var f=function (num)//nums us as parameter
{
  console.log(num*num)
}
 f(8); //here 8 uis a parameter
 //rest operator s[red operatoptr
 
 function multu(num1,num2)// this is rest (num1,num2)
 {
    console.log(num1*num2)
 }
 var ar=[5,6];
 multu(...ar)//this is spread(...ar);

 //
 var k=(...arr)=>
 {
    console.log(arr)
 }
 var arr=[1,2,3,4,5];
 k(...arr)
 //
 var k1=(...arr1)=>
 {
     arr1.map((value,index)=>
    {
        console.log(value)
    })
   const h=arr1.filter((value,index)=>
    {
        return value>2;
    })
    console.log(h)
    const reduce=arr1.reduce((acc,curr,i,arr)=>
    {
        return acc+curr;
    },0);
    console.log(reduce)
 }
 var arr1=[1,2,3,4,5,6];
  k1(...arr1)
  //
  const fn=(a,x,y,...number)=>
  {
console.log(x,y);
console.log(number)
  }
  fn(1,2,3,4,5,6);