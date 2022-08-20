import { Router } from '../modules';
import { createUser, authenticateUser, getUsers } from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', authenticateUser);

export default router;
