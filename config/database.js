const mongoose = require('mongoose');
require('dotenv').config();
 

const dbConnect = () => {
    mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected to database')
    })
    .catch((error) => { 
        console.log('Error connecting to database');
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;