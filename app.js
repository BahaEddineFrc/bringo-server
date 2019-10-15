const express = require('express');
const mongoose = require('mongoose');
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');
import routes from './config/routes'

const app = express();

var privateKey = fs.readFileSync('cert/client-key.pem').toString();
var certificate = fs.readFileSync('cert/client-cert.pem').toString();  

//mongoose.connect('mongodb://127.0.0.1:27017/bringo-server',{ useNewUrlParser: true })
mongoose.connect('mongodb://bringo_db:bringo_db0@ds341247.mlab.com:41247/bringo-server')
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.error("Could not connect to MongoDB..."));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)

//https.createServer({key: privateKey, cert: certificate}, app)
app.listen(process.env.PORT || 3000, (err) => {
    if (err) console.log(err);
    else  console.log('Server started on port 3000...');
})


/*  sudo service mongod start
    node -r esm app.js
    node app.js        */ 