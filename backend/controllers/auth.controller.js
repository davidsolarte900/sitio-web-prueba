
const User = require('../models/User');
const bcrypt = require('bcrypt');

const registrar = async(req, resp) => {
    try {const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({email: email});
    if(user) return response.status(400).json({msg: `el ususario  ${email} ya existe en la base de datos`})

        await user.save();

    }catch(error){
        resp.status(500).json({error: error.message})
    }
}