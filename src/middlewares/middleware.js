module.exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este é o valor da variável local.';
    next();
}

module.exports.outroMiddleware = (req, res, next) => {
    next();
}

module.exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}