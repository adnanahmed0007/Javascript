var fs =require("fs");
fs.readFile("example.txt","utf-8",(err,data)=>
{
    if(err)
    {
        console.log(err)
        return ;
    }
    else{
        console.log("file contect"+data)
    }
})
fs.writeFile("temporary.txt","hello",(err)=>
{
    if(err)
    {
        console.log("error")
    }
else{
    console.log("file saved sucefully")
}

})
