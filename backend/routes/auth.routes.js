const express = require('express');
const routes = express.Router();
const { registrar } = require('../controllers/auth.controller');

routes.post('/registrar', registrar);


module.exports = routes;