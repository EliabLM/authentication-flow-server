import { express, dotenv, cors } from './modules';
import connectDB from './database/db';
import routerApi from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

routerApi(app);

const PORT: string = process.env.PORT || '4000';

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
