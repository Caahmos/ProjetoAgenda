const Login = require('../Models/LoginModel');

module.exports.index = (req, res, next) => {
    res.render('login');
};

module.exports.register = async (req, res, next) => {
    const login = new Login(req.body);
   
    try{
        await login.register();

        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(() => {
                res.redirect('back');
                return;
            });
            return;
        };

        req.flash('success', 'Seu usuário foi criado com sucesso!');
        req.session.save(() => {
            res.redirect('back');
            return;
        });
    }catch(err){
        console.log(err);
        res.rend('404');
    };
};