var http = require('http');

function onRequest(request, response){
    console.log("An user made a request " + request.url);
    response.writeHead(200, {"Context-Type" : "text/plain"});
    response.write("Here is some data what you'r looking for");
    response.end();
}


http.createServer(onRequest).listen(80);
console.log("Server is running now.....");