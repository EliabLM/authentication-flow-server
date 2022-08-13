import { Router } from '../modules';

const router = Router();

router.get('/', (_req, res) => {
  res.send('Desde API/USERS');
});

router.post('/', (_req, res) => {
  res.send('Desde api/users');
});

export default router;
