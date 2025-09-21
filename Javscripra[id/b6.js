 
var k= setInterval(()=>
{
console.log("hello")
},200)
setTimeout(()=>
{
   
    clearInterval(k)

},2000)
//promise in js
const data={
    name:"adnan",
    age:"2311",
}
function fetchdata()
{
    return new Promise((resolve,rejected)=>
    {
        setTimeout(()=>
        {
            resolve(data)
        },1)
    })
}
fetchdata().then((data)=>
{
     console.log(data)
}).catch((err)=>
{
    console.log(err)
})