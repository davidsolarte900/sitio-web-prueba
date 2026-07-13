const { request } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const registrar = async (request, response) => {
    try {
        const { nombre, email, password } = request.body;
        let user = await User.findOne({ email: email });
        if (user) {
            return response.status(400).json({ msg: `el usuario ${email} ya existe en la base de datos` });
        }

const salt = await bcrypt.genSalt(10);
const passwordEncriptado = await bcrypt.hash(password, salt);

user = new User({
    nombre,
    email,
    password: passwordEncriptado 
});

await user.save();

        return response.status(201).json({
            msg: "el usuario se a registrado correctamente"
        });

    } catch (error) {

        return response.status(500).json({ error: error.message });
    }
};

const login  = async(request, response) => {
    try {
        const {email, password} = request.body;
        const user = await User.findOne ({email});
        if(!user) return response.status(400).json({msg: 'Usuario no existe'});

        const passwordsCoinciden = await bcrypt.compare(password, user.password);
        if(!passwordsCoinciden) return response.status(400).json({msg: 'constraseña incorrecta'});

        const token = jwt.sign(
            {
            id: user._id,
            rol: user.rol
        },
            process.env.JWT_SECRET,{expiresIn: '1h'});

            response.json({
                token,
                usuario: {id: user._id,
                    nombre: user.nombre,
                    emil: user.email,
                    rol: user.rol}
                });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};

module.exports = {
    registrar,
    login
};
