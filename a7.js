//map
const arr=[1,2,3,4,5];
const multiply=arr.map((value,index)=>
{
    return value*3;

})
console.log(multiply)
const iddevs=[2,3,4,6,7,8,10];
const oddeven=iddevs.map((value,index)=>
{
    if(value%2==0)
    {
        return value;
    }
     
})
console.log(oddeven)
//filter
const array=[1,2,3,4,5,6,"7",8,9];
const filterarray=array.filter((value,index)=>
{
    if(value%2==0)
    {
        return value;
    }
     
})
console.log(filterarray)
const fikteraya=array.filter((value,index)=>
{
    return value%2!==0;
})
console.log(fikteraya)
//reduce
const array1=[1,2,3,4]
const reducearray=array1.reduce((acc,curr,i,arr)=>
{
    return acc+curr;

},0)
console.log(reducearray)