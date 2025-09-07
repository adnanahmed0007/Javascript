//polyfulls
Array.prototype.mymap=function(cb)
{
    let temp=[];
    for( i=0;i<this.length;i++)
    {
        temp.push(cb(this[i],i ,this));
    }
    return temp;

}
nums =[1,2,3,4];
const arra1=nums.mymap((num,i,arr)=>
{
    return num*3;

})
console.log(arra1)
//filteer
Array.prototype.myfilter=function(cb)
{
    let temp=[];
    for(i=0;i<this.length;i++)
    {
        if(cb(this[i],i,this))
        {
        temp.push(this[i] );
        }
    }
    return temp;
}
numfikter=[1,2,3,4,5,6,7,8];
const fiktrara=numfikter.myfilter((num,i,arr)=>
{
    
    return num%2==0;

})
console.log(fiktrara)
//treduce
Array.prototype.myreduce=function(cb,initialvalue){
    temp=[];
    var accum=initialvalue;
    for(i=0;i<this.length;i++)
    {
        accum=cb(accum,this[i],i,this)

    }
     return accum
}
const reduicea=[1,2,3,4,5];
const reducet=reduicea.myreduce((acc,curr,i,arr)=>
{
    return acc+curr;
},0)
console.log(reducet)
//
function reduccc(cb)
{
cb(()=>
{
cb();
})
}
reduccc(()=>{
      

})