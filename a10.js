//problem
let student=[
    {name:"piyush",rollnumber:31,marks:80},
    {name:"rohan",rollnumber:21,marks:69},
    {name:"rahul",rollnumber:11,marks:35},
      
     {name:"ram",rollnumber:12,marks:35},

]
 console.log(student.length);
let arr=[];
for(i=0;i<student.length;i++)
{ 
    arr.push(student[i].name.toUpperCase())
}
console.log(arr)
//map
let arry=student.map((value,index)=>
{
    return value.name;
})
console.log(arry)
//for each
 let temp11=[];
 student.forEach((value,index)=>
{
   temp11.push(value.name) 
})
//retur tgose whps ecired mopre than 60
let stud70=student.map((value,index)=>
{
    if(value.marks>60)
    {
        return value;
    }
})
console.log(stud70)
//for loop
var temp=[];
for(i=0;i<student.length;i++)
{
    if(student[i].marks>60)
    {
        temp.push(student[i])
    }
}
console.log(temp)
//filter
var temp1=[];
const fikter=student.filter((value,index)=>
{
    return value.marks>70&&value.rollnumber>11
})
console.log(fikter)
//sum of marks of all the student
 var k=0;
 student.forEach((value,index)=>
{
    k=k+value.marks;
})
console.log(k)
//map
 const reduce=student.reduce((acc,curr,i,arr)=>
{
              return acc+curr.marks;
},0)
console.log(reduce)
//return oinky name  above 70
const returnaname=student.filter((value,index)=>
{
    return value.marks>70;
}).map((value,index)=>
{
    return value.name
})
console.log(
    returnaname)
//next qurtin
console.log("nect")
const resude=student.filter((value,index)=>
{
    return value.marks<60
})
 .map((value,index)=>
{
      value.marks=value.marks+20;
      return value;

}).reduce((acc,curr,i,arr)=>
{
    return acc+curr.marks;
},0)

console.log(resude)