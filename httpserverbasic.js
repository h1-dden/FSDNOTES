const http=require('http');
//server
const server=http.createServer((req,res)=>{
    res.write("Hello world this is my server")
    res.end()
})

server.listen(3000);