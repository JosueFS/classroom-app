type User = {
  id: string;
  token: string;
  name: string;
  type: string;
  room: string;
};

const users: User[] = [];

const addUser = ({ id, token, name, type, room }: User) => {
  const formatedName = name.trim().toLowerCase() || 'undefined';
  const formatedRoom = room.trim().toLowerCase() || 'undefined';

  const existingUser = users.find(
    user => user.room === formatedRoom && user.name === formatedName,
  );

  if (existingUser) {
    return { error: 'Username is taken!' };
  }

  if (!formatedName || !formatedRoom) {
    return { error: 'User and room name are required' };
  }

  const user = { id, token, name: formatedName, type, room: formatedRoom };
  users.push(user);

  return { user };
};

const removeUser = (id: string) => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (token: string) => users.find(user => user.token === token);

const getAllStudentsInRoom = (room: string) =>
  users.filter(user => user.room === room);

const getNumberOfStudentsInRoom = (room: string) => {
  return users.filter(user => user.room === room && user.type === 'student')
    .length;
};

const checkTeacherStatus = (room: string) => {
  const teacher = users.filter(user => user.type === 'teacher');

  return teacher.length ? 'online' : 'offline';
};

export {
  addUser,
  removeUser,
  getUser,
  getAllStudentsInRoom,
  getNumberOfStudentsInRoom,
  checkTeacherStatus,
};
