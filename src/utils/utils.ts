import { v4 as uuid4 } from 'uuid';

export const generateUUID = () => {
  return uuid4();
};

export const getFirstChars = (fullname: string | undefined) => {
    if (!fullname) {
        throw new Error('fullname is undefined');
    }
    const trimmedName = fullname.trim()
  const parts = trimmedName.split(' ');
  if (parts.length < 2) {
    throw new Error('Invalid name format. Expected at least a first name and a last name.');
  }
  const firstChar = parts[0].charAt(0).toUpperCase();
  const secondChar = parts[1].charAt(0).toUpperCase();

  return firstChar + secondChar;
};
