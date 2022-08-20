import { jwt, Request, Response, NextFunction } from '../modules';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, invalid permission' });
  }

  try {
    console.log('token a enviar', token);
    const encryption = jwt.verify(token, process.env.SECRET || '');
    console.log('encryption', encryption);
    // req.user = encryption.user;
    next();
    return encryption;
  } catch (error) {
    console.error('Error auth', error);

    return res.status(401).json({ msg: 'Invalid token' });
  }
};

export default auth;
