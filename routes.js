const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homecontroller');
const testeController = require('./src/controllers/testecontroller');


route.get('/', homeController.paginaInicial);
route.post('/', homeController.respostaDaPaginaInicial);
route.get('/teste/:idUsuario?', testeController.paginaInicial);

module.exports = route;