import Plano from '../model/planos';

exports.index = (req, res) => {
  res.render('admin/dashboard');
};

exports.cadastrarPlano = async (req, res) => {
  const plano = new Plano(req.body);
  await plano.save();
  res.redirect('/admin/dashboard');
};
