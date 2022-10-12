const { Collection } = require("mongodb");

module.exports = function(db, app){
    //Route to manage the login of a user

    app.post('/api/removechannel', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        
        let collection = db.collection('channels');

        collection.deleteOne({'name':req.body.channel}, (err, docs)=>{
            if (err) throw err;
        })

        let collection2 = db.collection('groups');
        collection2.updateMany({channel_id: req.body.channel}, {$pull:{channel_id: req.body.channel}}, ()=>{
            res.send({check: 1, err:""});
        })

    })
}