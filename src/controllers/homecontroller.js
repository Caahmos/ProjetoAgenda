const Contato = require('../Models/ContatoModel');

module.exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
    return;
};
