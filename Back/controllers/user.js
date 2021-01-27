class User {
  getIndex(req, res, next) {
    res.render('index');
  }
  getInscricao(req, res, next) {
    res.render('inscricao');
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
