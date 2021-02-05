import Local from '../model/local';
import Plano from '../model/planos';
class User {
  getIndex(req, res, next) {
    res.render('index');
  }
  async getInscricao(req, res, next) {
    var plano = req.body.params;
    const local = await Local.index();
    res.render('inscricao', { local, plano });
  }
  getContato(req, res, next) {
    res.render('contato');
  }
  getLocal(req, res, next) {
    res.render('local');
  }
  getPlanos(req, res, next) {
    res.render('planos');
  }
}

export default new User();
