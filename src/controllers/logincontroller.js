module.exports.index = (req, res, next) => {
    console.log('Passei pelo index do login')
    res.render('login');
}