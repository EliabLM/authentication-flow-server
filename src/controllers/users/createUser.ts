import { bcrypt, Request, Response } from '../../modules';
import User from '../../models/User';

const createUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      const error = new Error('The user is already registered');
      return res.status(400).json({ msg: error.message });
    }

    const user = new User(req.body);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const storedUser = await user.save();

    return res.status(201).json({
      msg: 'The user has been created',
      user: {
        name: storedUser.name,
        email: storedUser.email,
      },
    });
  } catch (error) {
    console.error('Error createUser: ', error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

export default createUser;
