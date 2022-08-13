import { Express, Router } from '../modules';
import userRouter from './user.routes';

const routerApi = (app: Express) => {
  const router = Router();

  app.use('/api/v1', router);

  router.use('/users', userRouter);
};

export default routerApi;
