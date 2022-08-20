import { bcrypt, Request, Response } from '../../modules';
import User, { IUser } from '../../models/User';
import generateJWT from '../../helpers/generateJWT';

const createUser = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      const error = new Error('The user is already registered');
      return res.status(400).json({ msg: error.message });
    }

    const user: IUser = new User({ email, name, password, rol: req.body?.rol });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const storedUser = await user.save();

    const token: string = generateJWT(storedUser._id);

    return res
      .status(201)
      .header('auth-token', token)
      .json({
        msg: 'The user has been created',
        user: {
          name: storedUser.name,
          email: storedUser.email,
          accessToken: token,
        },
      });
  } catch (error) {
    console.error('Error createUser: ', error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

export default createUser;
