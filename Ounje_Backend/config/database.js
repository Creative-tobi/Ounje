const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const CONNECTION_STRING = process.env.CONNECTION_STRING;

const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log('mongodbdatabse successfully connected to the server');
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;