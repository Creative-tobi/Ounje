const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();
connectDB();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`Server running on port {PORT}`);
});
