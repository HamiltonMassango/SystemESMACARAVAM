import Local from '../model/local';
import Plano from '../model/planos';
class User {
  async getIndex(req, res, next) {
    const locals = await Local.index();
    res.render('index', { locals });
  }
  async create(req, res, next) {
    console.log(req.body);
  }

  async getInscricao(req, res, next) {
    var planos = req.params.id;
    planos = await Plano.single(planos);
    const locals = await Local.index();
    return res.render('inscricao', { locals, plano: planos[0] });
  }
  async getContato(req, res, next) {
    const locals = await Local.index();
    res.render('contato', { locals });
  }
  async getLocal(req, res, next) {
    const id = req.params.id - 1;
    const locals = await Local.index();

    res.render('local', { locals, id });
  }
  async getPlanos(req, res, next) {
    const locals = await Local.index();
    const planos = await Plano.index();
    res.render('planos', { planos, locals });
  }
}

export default new User();
