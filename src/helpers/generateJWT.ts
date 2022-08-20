import { jwt } from '../modules';

const generateJWT = (id: string) => {
  return jwt.sign({ id }, process.env.SECRET || 'tokensecret', {
    expiresIn: 120,
  });
};

export const generateRefreshJWT = (id: string) => {
  return jwt.sign({ id }, process.env.SECRET || 'tokensecret', {
    expiresIn: 240,
  });
};

export default generateJWT;
