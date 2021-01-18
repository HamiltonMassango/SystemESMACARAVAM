import { Router } from 'express';
const router = Router();
import userController from './controllers/user';
// Pagina Pricipal

router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/inscrever', userController.getInscricao);
router.get('/contato', userController.getContato);
router.get('/local', userController.getLocal);
router.get('/planos', userController.getPlanos);

export default router;
