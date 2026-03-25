// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('pose_data', (data) => {
        // Broadcast to React frontend
        socket.broadcast.emit('render_pose', data);
    });
});

server.listen(5000, () => console.log('Relay server on port 5000'));
