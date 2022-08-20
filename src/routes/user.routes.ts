import { Router } from '../modules';
import { createUser, authenticateUser, getUsers } from '../controllers/users';
import auth from '../middlewares/auth';

const router = Router();

router.get('/', auth, getUsers);
router.post('/create-user', createUser);
router.post('/login', authenticateUser);

export default router;
