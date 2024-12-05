import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat', (message) => {
        io.emit('chat', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(5174, () => console.log('Server is running on port 5174'));