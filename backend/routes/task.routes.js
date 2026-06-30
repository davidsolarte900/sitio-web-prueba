const express = require('express');
const router = express.Router();
const validarToken = require('../middlewares/auth.middleware');

const { crearTarea } = require('../controllers/task.controller');

router.post('/', validarToken, crearTarea);

module.exports = router;

