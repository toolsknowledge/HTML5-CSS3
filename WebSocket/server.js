//import http module
const http = require("http");

//create the chat server
const server = require("websocket").server;


//assign the port number
const socket = new server({
    httpServer : http.createServer().listen(8080,()=>{
        console.log("chat server listening the port number 8080");
    })
})


//connect
socket.on("request",function(request){
    let connection  = request.accept(null,request.origin);

    connection.on("message",function(message){
        console.log(message.utf8Data);

        connection.sendUTF("Hello");

        setTimeout(()=>{
            connection.sendUTF("Welcome");
        },5000);
    })


    connection.on("close",function(connection){
        console.log("connection closed");
    })

})


