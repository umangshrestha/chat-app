/* imports */
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;
const http = require('http').Server(app);
http.listen(PORT, () => console.log(`app running on port ${PORT}`));

const io = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});


io.on('connection', (socket) => {
    console.log('made socket connection', socket.id, socket.data);

    socket.on('chat', data => {
        console.log(data)
        io.sockets.emit('chat', data)
    });

    socket.on('typing', (data) => {
        console.log(".........")
        socket.broadcast.emit('typing', data)
    });
})