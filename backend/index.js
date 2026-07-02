const dotenv = require ('dotenv');
dotenv.config ();
const express = require('express');
const app = express();
const connectDb = require('./config/db');
const auth = require('./routes/auth.routes');
const task = require('./routes/task.routes');
const producto = require('./routes/producto.routes');





connectDb();
app.use(express.json());

app.use('/api/auth', auth); 
app.use('/api/task', task);
app.use('/api/productos', producto);



const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`conectamos a puerto ${PORT}`)
});



