import { connect } from '../modules';

const connectDB = async () => {
  try {
    const connection = await connect(process.env.DB_MONGO || '');

    const url: string = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB connected to: ${url}`);
  } catch (error) {
    console.error('connectDB error: ', error);
    process.exit(1);
  }
};

export default connectDB;
