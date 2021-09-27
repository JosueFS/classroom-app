import { v4 as uuid } from 'uuid';

export const generateRandomAvatar = (userToken = uuid()): string => {
  return `https://avatars.dicebear.com/api/personas/${userToken}.svg`;
};
