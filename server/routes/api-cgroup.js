const { Collection } = require("mongodb");

module.exports = function(db, app){
    //Route to manage the login of a user

    app.post('/api/cgroup', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        let collection = db.collection('groups');

        collection.insertOne({name: req.body.group, user_ids:[], channel_id:[]}, (err, dbres)=>{
            if (err) throw err;
            res.send({check: 1, err:""});
        })

    })
}