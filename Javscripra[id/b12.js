const http =require("http");
const server=http.createServer(function (req,res)
{
          res.writeHead(200,{"Content-Type":"text/html"});
          res.end("hello    122world")

},899)
 server.listen(899,()=>{
    console.log(`we are on ${899}`)
 })