 function greeting(name,callback)
 {
    console.log("hello",name);
    callback();
 }
 function Greetings()
 {
    console.log("good moring");
 }
 greeting("adnan",Greetings)
 function mulktiply(num,callbcak)
 {
console.log("the number s"+" "+num)
cakbacjk(num);
 }
 function cakbacjk(num)
 {
    for(i=0;i<=10;i++)
    {
        console.log(num*i);
    }
 }
mulktiply(2,cakbacjk)
//
 
 function revsrese(arr)
 {
      console.log("reevrse array");
      rsvsre(arr)
 }
 function rsvsre(arr)
 {
    for(let k=arr.length;k>=0;k--)
    {
        console.log(arr[k]);
    }
 }
  let a=[1,2,4,5,6];
 revsrese(a)
//arraowr vs nornal functiin
   function nornal()
   {
    console.log(arguments)
   }
   nornal(2,3)// here in normal function it take the argmnet and dont have paramete but ut worfls
//   const normarrwo=()=>
//   {
//     console.log(arguments)
//   }
//   normarrwo(2,2)  not
  // 
  const revse=(num)=>console.log(num*num)
  revse(7)
  //
  let use={
    username:"adnana ahmed",
    rc1:()=>
    {
        this.username=use.username
        console.log(this.username)
    },
    rc2()
    {
        
        console.log(this.username)
    }
    
  }
  use.rc1();
  use.rc2();