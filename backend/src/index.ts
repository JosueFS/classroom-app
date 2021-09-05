import express from 'express';
import cors from 'cors';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';

type RoomInfoType = {
  status: 'waiting' | 'live';
  totalClassroomStudents: number;
};

type userSocketType = {
  [key: string]: {
    name: string;
    id: string;
  };
};

const PORT = process.env.PORT || 3333;

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
  transports: ['websocket', 'polling'],
});

let classroomStudents: userSocketType[] = [];

const users = {} as userSocketType;

io.on('connection', client => {
  client.on('username', username => {
    const user = {
      name: username,
      id: client.id,
    };
    users[client.id] = user;
    io.emit('connected', user);
    io.emit('users', Object.values(users));
  });

  client.on('send', message => {
    io.emit('message', {
      text: message,
      date: new Date().toISOString(),
      user: users[client.id],
    });
  });

  client.on('disconnect', () => {
    const username = users[client.id];
    delete users[client.id];
    io.emit('disconnected', client.id);
  });
});

httpServer.listen(PORT, () => console.log('a'));
