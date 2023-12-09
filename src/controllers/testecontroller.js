let paginaInicial = function (req, res){
    res.send(req.params);
    console.log(req.params)
}

module.exports = {
    paginaInicial
}