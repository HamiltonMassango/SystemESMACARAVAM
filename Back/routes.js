import { Router } from 'express';
const router = Router();
import userController from './controllers/user';
import authControllers from './controllers/auth';
import countryControllers from './controllers/admin';
// Pagina Pricipal

router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/inscricao', userController.getInscricao);
router.get('/contato', userController.getContato);
router.get('/local', userController.getLocal);
router.get('/planos', userController.getPlanos);
router.post('/plano', countryControllers.cadastrarPlano);
router.get('/login', authControllers.login);
router.get('/admin/dashboard', countryControllers.index);
export default router;
