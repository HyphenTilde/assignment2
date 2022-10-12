const { Collection } = require("mongodb");

module.exports = function(db, app){
    //Route to manage the login of a user

    app.post('/api/removegroup', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        
        let collection = db.collection('groups');

        collection.deleteOne({'name':req.body.group}, (err, docs)=>{
            if (err) throw err;
        })

        let collection2 = db.collection('channels');
        collection2.deleteMany({group_id: req.body.group}, (err, docs)=>{
            if (err) throw err;
            res.send({check: 1, err:""});
        })

    })
}