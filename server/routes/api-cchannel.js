const { Collection } = require("mongodb");

module.exports = function(db, app){
    //Route to manage the login of a user

    app.post('/api/cchannel', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        let collection = db.collection('channels');

        collection.insertOne({name: req.body.channel, user_ids:[], group_id: req.body.group}, (err, dbres)=>{
            if (err) throw err;
        })
        let collection2 = db.collection('groups');
        collection2.updateOne({name: req.body.group}, {$push:{channel_id: req.body.channel}}, ()=>{
            res.send({check: 1, err:""});
        })

    })
}