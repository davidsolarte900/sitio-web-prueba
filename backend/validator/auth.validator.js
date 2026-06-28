const { body } = require('express-validator');
const { notify } = require("../routes/auth.routes");

const registerValidator = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 4 }).withMessage('minimo 4 caracteres'),
    body('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debes enviar un email valido'),
    body('password')
        .notEmpty().withMessage('La contraseña es obligatorio')
        .isLength({ min: 6 }).withMessage('La constraseña debe tener minimo 6 caracteres entre numeros y letras')    
];

const loginValidator = [
    body('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debes ingresar un email valido').normalizeEmail(),
    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria') 
];




module.exports = {
    registerValidator,
    loginValidator    
}