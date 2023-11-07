const express = require('express');
const app = express();

// load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;
 
// middleware to parse json req body
app.use(express.json());

// import routes for todo api
const todoRoutes = require('./routes/todo'); 
 
// mount todo api routes
app.use('/api/v1',todoRoutes);

app.listen(PORT,() => {
    console.log('listening on port',PORT);
})
  
// db connection
const dbConnect = require('./config/database.js');
dbConnect();

// default route
app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`);
})
  