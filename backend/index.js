const dotenv = require ('dotenv');
dotenv.config ();
const express = require('express');
const app = express();
const connectDb = require('./config/db');
const auth = require('./routes/auth.routes');



connectDb();
app.use(express.json());

app.use('/api/auth', auth); 



const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`conectamos a puerto ${PORT}`)
});



/*Este archivo index.js es el punto de entrada principal de tu backend.
 Se encarga de cargar la configuración, conectar la base de datos y levantar el servidor web para que escuche peticiones.
 Aquí tienes la explicación paso a paso:1. Importación de módulos (Líneas 1 a 4)const dotenv = require('dotenv');:
 Carga la librería para leer archivos .env (donde guardas contraseñas o URLs privadas).const express = require('express');: 
 Importa Express, el framework que usas para crear las rutas y el servidor web.const app = express();: Inicializa la aplicación de Express.
 const connectDb = require('./config/db');: Importa la función de conexión a MongoDB que creaste en el archivo anterior (db.js).
 2. Configuración e Inicialización (Líneas 7 a 10)dotenv.config();: Activa la lectura del archivo .env.
¡Ojo con el orden aquí! (ver sección de advertencias abajo).app.use(express.json());: 
Es un middleware que permite a tu servidor entender datos en formato JSON cuando alguien te envía información 
(por ejemplo, en un formulario de registro).connectDb();: Ejecuta la función para conectarte a MongoDB.const PORT = process.env.PORT:
Define en qué número de puerto correrá el servidor, tomándolo de tus variables de entorno.
3. Arranque del Servidor (Líneas 12 a 14)app.listen(PORT, () => { ... });: Enciende oficialmente el servidor. 
Se queda "escuchando" en el puerto definido y, en cuanto arranca con éxito, ejecuta el console.log mostrando el mensaje en la terminal.

 */