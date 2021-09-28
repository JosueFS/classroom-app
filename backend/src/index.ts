import express, { Request, Response, NextFunction as Next } from 'express';
import http from 'http';
import socketio from 'socket.io';
import cors from 'cors';

import 'dotenv/config';

import routes from './routes';
import * as UsersController from './controllers/users.controller';
import { removeUser } from './controllers/users.controller';

const PORT = process.env.PORT || 3333;

const app = express();
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: Next) => {
  console.log('An error occured:', error);

  response.json({ message: error.message || 'An unknown error occured.' });
});

interface IResults {
  subject: string;
  questions: [{ question: string; answer: string; isCorrect: boolean }];
  score: number;
}

let results: IResults[] = [];

io.on('connection', socket => {
  socket.on('join', ({ id, token, name, type, room }) => {
    const { error, user } = UsersController.addUser({
      id: socket.id,
      token,
      name,
      type,
      room,
    });

    if (error || !user) return error;

    socket.join(user.room);

    io.to(user.room).emit(
      'teacherStatus',
      UsersController.checkTeacherStatus(user.room),
    );

    socket.broadcast
      .to(user.room)
      .emit('updatedRoomInfo', UsersController.getAllStudentsInRoom(user.room));

    io.to(user.room).emit(
      'numberOfStudentsInRoom',
      UsersController.getNumberOfStudentsInRoom(user.room),
    );

    io.to(user.room).emit(
      'fetchUsers',
      UsersController.getAllStudentsInRoom(user.room),
    );

    socket.on('sendQuizNotification', data => {
      io.to(user.room).emit('quizToStudents', data);
    });

    socket.on('handleSubmitResult', (data: IResults) => {
      io.to(user.room).emit('studentsQuizResults', results);
      results.push(data);
      console.log(data);

      const teacher = UsersController.getTeacherSocketID();

      if (teacher) {
        console.log(`Enviando para ${teacher.name} => ${teacher.id}`);
      }
    });

    console.log(`User => ${socket.id} connected.`);
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit(
        'numberOfStudentsInRoom',
        UsersController.getNumberOfStudentsInRoom(user.room),
      );

      io.to(user.room).emit(
        'teacherStatus',
        UsersController.checkTeacherStatus(user.room),
      );

      io.to(user.room).emit(
        'fetchUsers',
        UsersController.getAllStudentsInRoom(user.room),
      );
      socket.leave(user.room);
    }

    socket.disconnect();

    console.log(`User => ${socket.id} disconnected.`);
  });
});

httpServer.listen(PORT, () =>
  console.log(`\nServidor online na porta: ${PORT}!`),
);
