const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  //process.exit(1);
}

mongoose.connect('mongodb://127.0.0.1:27017/bringo-server',{ useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.error("Could not connect to MongoDB..."));
/*
let db = mongoose.connection;
// Check connection & errors
db.once('open', function(){ console.log('Connected to MongoDB'); });
db.on('error', function(err){ console.log(err); });*/

// parse application/x-www-form-urlencoded & parse application/json 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route Files
let restaurants = require('./routes/restaurants');
let users = require('./routes/users');
app.use('/', restaurants); //c koi
app.use('/', users);


// Test Get
let User = require('./models/user');
//const router = express.Router();
app.get('/use', function(req, res){
  console.log("Someone's trying to connect");
  User.find({},function(err, users){
    res.send(users);
  });
});


// Start Server
app.listen(3000, function(err){
    if (err) console.log(err);
    else  console.log('Server started on port 3000...');
});


  /*  sudo service mongod start
       node app.js            */ 