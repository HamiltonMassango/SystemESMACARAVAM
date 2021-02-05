import Plano from '../model/planos';
import Local from '../model/local';

exports.index = (req, res) => {
  res.render('admin/dashboard');
};

exports.cadastrarPlano = async (req, res) => {
  const plano = new Plano(req.body);
  await plano.save();
  res.redirect('/admin/dashboard');
};

exports.cadastrarLocal = async (req, res) => {
  const { name } = req.body;
  const files = JSON.stringify(req.files);
  const local = new Local({ name, files });
  await local.save();
  res.redirect('/admin/dashboard');
};
