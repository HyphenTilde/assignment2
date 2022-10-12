const express = require('express');
const app = express();
const http = require('http').Server(app);
var path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

app.use(express.static(path.join(__dirname, '../my-chat/dist/my-chat')));

app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    //When we have a connection, start the rest of the app.
    if(err) {return console.log(err)}
    
    const dbName = 'backdb';
    const db = client.db(dbName);
    const col1 = db.collection('groups');

    require('./routes/api-login.js')(db, app);
    require('./routes/api-collect.js')(db, app);
    require('./routes/api-screate.js')(db, app);
    require('./routes/api-sremove.js')(db, app);
    require('./routes/api-supgrade.js')(db, app);
    require('./routes/api-cgroup.js')(db, app);
    require('./routes/api-addtogroup.js')(db, app);
    require('./routes/api-cchannel.js')(db, app);
    require('./routes/api-ccollect.js')(db, app);
    require('./routes/api-addtochannel.js')(db, app);
    require('./routes/api-removegroup.js')(db, app);
    require('./routes/api-removechannel.js')(db, app);

    app.listen(3000, ()=>{
        console.log("Server is listening on port 3000");
    })
    app.get('/*',function(req,res,next){
        res.sendFile('index.html',{ root:'../my-chat/dist/my-chat' });
    });
    
})
