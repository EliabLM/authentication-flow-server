import { Schema, model } from '../modules';

enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
}

interface IUser {
  name: string;
  rol: ROLES;
  password: string;
  email: string;
  refreshToken: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    rol: {
      type: String,
      default: ROLES.USER,
      enum: ROLES,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model('User', userSchema);
export default User;
