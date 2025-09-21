
 const obj={
    usernam:"adnan",
    price:122,
    genetae:function()
    {
        console.log(`hello ${this.usernam}`)
        console.log(this)
    }
 }
// obj.genetae();
// obj.usernam="90",
// obj.genetae()
console.log(this)
function tyes()
{
    console.log(this)
}
tyes()
const arrwo=()=>
{
    console.log(this)
}
arrwo()