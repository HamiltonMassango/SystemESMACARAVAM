import { Router } from 'express';
import multer from 'multer';

const router = Router();
import userController from './controllers/user';
import authControllers from './controllers/auth';
import adminControllers from './controllers/admin';
import configMulter from './config/multer';

const upload = multer(configMulter);
// Pagina Pricipal

router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/inscricao/:id', userController.getInscricao);
router.get('/contato', userController.getContato);
router.get('/local/:id', userController.getLocal);
router.post(
  '/local',
  upload.array('photo', 6),
  adminControllers.cadastrarLocal
);
router.get('/planos', userController.getPlanos);
router.post('/plano', adminControllers.cadastrarPlano);
router.get('/login', authControllers.login);
router.get('/admin/dashboard', adminControllers.index);
export default router;
