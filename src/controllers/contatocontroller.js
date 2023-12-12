const Contato = require('../Models/ContatoModel')

module.exports.index = (req, res, next) => {
    res.render('cadastrocontato', { contato: {} });
};

module.exports.register = async (req, res, next) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => { res.redirect('back'); });
            return;
        }

        req.flash('success', 'Contato registrado com sucesso!');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));

    } catch (err) {
        console.log(err);
        res.render('404');
    }
}

exports.editIndex = async (req, res) => {
    if (!req.params.id) res.render('404');
    const contato = await Contato.buscaporid(req.params.id);

    if (!contato) {
        res.render('404');
        return;
    }

    res.render('cadastrocontato', { contato });
};


