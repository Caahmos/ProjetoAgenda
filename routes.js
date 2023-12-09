const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homecontroller');
const loginController = require('./src/controllers/logincontroller');

//Rotas de home
route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', loginController.index);

module.exports = route;