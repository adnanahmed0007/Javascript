var http =require("http");
const server=http.createServer(function(req,res)
    {
        res.writeHead(200,"Content-Type","text/html")
        res.end("hello world1111")

    })
    
    server.listen(8000,()=>
    {
        console.log(`we are on port 8000`)
    })

console.log("start")
setTimeout(()=>
{
    console.log("hello")
},2000);
console.log("end")