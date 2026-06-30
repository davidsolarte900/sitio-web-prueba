const mongoose = require ('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('conectaste a mongoose')
    } catch(error){
        console.error(`error en mongodb error: ${error.message}`)
    }
};

module.exports = connectDb;

