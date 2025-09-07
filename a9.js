//map vs for each
arr=[1,2,3,4];
const resturnarr=arr.map((value,index)=>
{
    return value*2;
     
}).filter((element,index)=>
{
    return element>2;
})
console.log(resturnarr)
const resulktatray=arr.forEach((element,i) => {
      arr[i]=element+2
});
 console.log(arr)
 //.filter((element,index)=>
//{
   // return element>2;
//})
//we cant do this as it does nt return anything for each
 //resulktatray it wil be undefuned qas it does not return anythi ng tge foreach its juts uodate tge existinf array