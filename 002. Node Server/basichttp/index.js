const http = require("http");
const port = 9000;


const server = http.createServer();

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is nunning on https://localhost:${port}`);
}) ;