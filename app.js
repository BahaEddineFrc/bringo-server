const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
import routes from './config/routes'

const hostname = '127.0.0.1';
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/bringo-server',{ useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.error("Could not connect to MongoDB..."));

// parse application/x-www-form-urlencoded & parse application/json 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route Files
app.use(routes)

// Start Server
app.listen(port, hostname, (err) => {
    if (err) console.log(err);
    else  console.log('Server started on port 3000...');
})


/*  sudo service mongod start
    node app.js        */ 