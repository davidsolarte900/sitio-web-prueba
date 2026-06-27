const { body } = require('express-validator');

const registerValidator = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({}).withMessage('minimo 3 caracteres'),
    body('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debes enviar un email valido'),
    body('password')
        .notEmpty().withMessage('La contraseña es obligatorio')
        .isLength({ min: 6 }).withMessage('La constraseña debe tener minimo 8 caracteres mayus, minus, numeros y caracteres especiales')    

]
module.exports = {
    registerValidator
}