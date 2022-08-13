import express from 'express';
import dotenv from 'dotenv';

import connectDB from './db/db';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const PORT: string = process.env.PORT || '4000';

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
