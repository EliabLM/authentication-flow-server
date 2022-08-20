import { Request, Response, bcrypt } from '../../modules';
import User from '../../models/User';
import generateJWT from '../../helpers/generateJWT';

const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error('Username does not exist');
    return res.status(404).json({ msg: error.message });
  }

  const correctPassword = await bcrypt.compare(password, user.password);

  if (!correctPassword) {
    return res.status(400).json({ msg: 'Incorrect password' });
  }

  const accessToken = generateJWT(user.id);
  // const refreshToken = generateRefreshJWT(user.id);

  return res.status(200).json({ accessToken });
};

export default authenticateUser;
