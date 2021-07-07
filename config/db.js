const mongoose = require('mongoose');
const config  = require('config');
const db = config.get('mongoURI');

//Conectign Mongoose DB Async Await
const connectDB = async () =>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Mongo DB Connected')
    } catch (error) {
        console.error(error.message);
        //Exit process with failure
        process.exit(1)
    }
} 
module.exports = connectDB;