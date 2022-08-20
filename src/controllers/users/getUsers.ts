import User from '../../models/User';
import { Request, Response } from '../../modules';

const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password');
    return res.status(200).json({ users });
  } catch (error) {
    console.error('Error getUsers', error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

export default getUsers;
