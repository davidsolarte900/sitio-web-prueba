/* registrar y autenticar usuario*/

const { request } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const registrar = async (request, response) => {
    try {
        const { nombre, email, password } = request.body;
        

        // 1. Validar si ya existe el correo
        let user = await User.findOne({ email: email });
        if (user) {
            return response.status(400).json({ msg: `el usuario ${email} ya existe en la base de datos` });
        }

        // 1. Generamos el salt y encriptamos la contraseña del request.body
const salt = await bcrypt.genSalt(10);
const passwordEncriptado = await bcrypt.hash(password, salt);

// 2. Le pasamos 'passwordEncriptado' al modelo de Mongoose
user = new User({
    nombre,
    email,
    password: passwordEncriptado // <--- CORRECCIÓN CLAVE
});

await user.save();


        // 4. Enviar respuesta de éxito
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

        response.json({
            msg: 'iniciste sesion!!'
        })

    } catch (error) {

        return response.status(500).json({ error: error.message });
    }
};

module.exports = {
    registrar,
    login
};





/*
Este archivo auth.controller.js contiene la lógica para registrar un nuevo usuario en tu aplicación.
 Es un controlador que recibe los datos que envía el cliente (como una app de React o Postman), 
 los procesa y los guarda en MongoDB.Aquí tienes la explicación detallada:1. Importaciones 
 (Líneas 3 y 4)const User = require('../models/User');: 
 Importa el modelo de usuario, que define la estructura que tendrán los usuarios en la base de datos (nombre, email, contraseña).
 const bcrypt = require('bcrypt');: Importa una librería para encriptar contraseñas. 
 (Nota: Aunque la importas, no la estás usando todavía en este fragmento).
 2. Parámetros de la función (Línea 6)const registrar = async(req, resp) => { ... }: 
 Define la función asíncrona para el registro.req (request/petición): Contiene toda la información que envía el cliente.resp (response/respuesta):
  Es el objeto que usas para enviarle una respuesta de vuelta al cliente. (Nota: En tus parámetros lo llamaste resp, ten esto en mente).
  3. Extraer datos del cuerpo (Líneas 7 a 9)Extraes el nombre, email y password que el usuario escribió en el formulario de registro y que viajan dentro de req.body.
  4. Validación de usuario duplicado (Líneas 11 y 12)User.findOne({email: email}): Busca en la base de datos si ya existe algún usuario registrado con ese mismo correo electrónico.if(user):
   Si encuentra un usuario (es decir, el correo ya está registrado), detiene la ejecución inmediatamente y devuelve un código de estado HTTP 400 (Bad Request) 
   con el mensaje "el usuario ... ya existe".*/