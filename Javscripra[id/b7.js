//asdyns awauit
async function  asyns() {
    try{
  const respoisne=await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const data=await respoisne.json()
  console.log(data)
    }

    catch(e)
    {
        console.log()
    }
    
}
asyns()