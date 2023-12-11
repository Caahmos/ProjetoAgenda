const Contato = require('../Models/ContatoModel')

module.exports.index = (req, res, next) => {
        res.render('cadastrocontato');
};

module.exports.register = async (req, res, next) => {
    try{
        const contato = new Contato(req.body);
        await contato.register();

    if(contato.errors.length > 0){
        req.flash('errors', contato.errors);
        req.session.save(() => { res.redirect('back'); });
        return;
    }

    req.flash('success', 'Contato regristrado com sucesso!');
    req.session.save(() => { res.redirect('back'); });

    }catch(err){
        console.log(err);
        res.render('404');
    }
}


