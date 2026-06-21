const dotenv = require ('dotenv');
const express = require('express');
const app = express();
const connectDb = require('./config/db');


dotenv.config ();
app.use(express.json());
connectDb();
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`conectamos a puesrto ${PORT}`)
});

