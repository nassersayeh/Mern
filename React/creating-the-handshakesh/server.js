// server.js
const express = require('express');
const { Socket } = require('socket.io');
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server,{cors:true});
io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)")
    socket.on("event_from_client", data =>{
    socket.broascast.emit("send_data_to_all_other_clients" , data);
    });
});

// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
