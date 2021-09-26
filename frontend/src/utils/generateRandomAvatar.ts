import { v4 as uuid } from 'uuid';

export const generateRandomAvatar = (): string => {
  return `https://avatars.dicebear.com/api/personas/${uuid()}.svg`;
};
