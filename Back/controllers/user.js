import Local from '../model/local';
import Plano from '../model/planos';
class User {
  getIndex(req, res, next) {
    res.render('index');
  }
  async getInscricao(req, res, next) {
    var planos = req.params.id;
    planos = await Plano.single(planos);
    const locals = await Local.index();
    return res.render('inscricao', { locals, plano: planos[0] });
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
