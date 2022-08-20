import { Schema, model, Document } from '../modules';

export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
}

export interface IUser extends Document {
  name: string;
  rol: ROLES;
  password: string;
  email: string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
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
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const User = model<IUser>('User', userSchema);
export default User;
