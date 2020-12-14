exports.getIndex = (req, res, next) => {
    res.render('index');
}

exports.getInscricao = (req, res, next) => {
    res.render('inscricao');
}

exports.getContato = (req, res, next) => {
    res.render('contato');
}