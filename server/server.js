const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-oarser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(bodyParser.json());
const url = 'http://localhost:3000/';

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    //When we have a connection, start the rest of the app.
    if(err) {return console.log(err)}
    
    const dbName = 'backdb';
    const db = client.db(dbName);

    require('./routes/api-login.js')(db, app);
})