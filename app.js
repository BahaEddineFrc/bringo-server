import express from 'express'

//const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

import routes from './config/routes'

const hostname = '127.0.0.1';
const port = 3000;

//mongoose.connect('mongodb://127.0.0.1:27017/bringo-server',{ useNewUrlParser: true })
mongoose.connect('mongodb://bringo_db:bringo_db0@ds341247.mlab.com:41247/bringo-server')
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.error("Could not connect to MongoDB..."));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)

app.listen(process.env.PORT || port, hostname, (err) => {
    if (err) console.log(err);
    else  console.log('Server started on port 3000...');
})


/*  sudo service mongod start
    node -r esm app.js
    node app.js        */ 