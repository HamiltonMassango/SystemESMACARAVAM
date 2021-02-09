import Local from '../model/local';
import Plano from '../model/planos';
import Users from '../model/user';
class User {
  async getIndex(req, res, next) {
    const locals = await Local.index();
    res.render('index', { locals });
  }
  async create(req, res, next) {
    const { name, bi, email, senha, endereco, numeroCartao } = req.body;
    const { filename } = req.file;

    const user = new Users(
      name,
      bi,
      email,
      senha,
      endereco,
      numeroCartao,
      filename
    );
    var dados = await user.save();

    res.redirect('/bilhete/1');
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
  async getBilhete(req, res, next) {
    res.render('bilhete');
  }
}

export default new User();
