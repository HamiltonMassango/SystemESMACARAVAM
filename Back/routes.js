import { Router } from 'express';
const router = Router();
import userController from './controllers/user';
import adminController from './controllers/auth';
// Pagina Pricipal

router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/inscricao', userController.getInscricao);
router.get('/contato', userController.getContato);
router.get('/local', userController.getLocal);
router.get('/planos', userController.getPlanos);

router.get('/admin', adminController.login);
export default router;
