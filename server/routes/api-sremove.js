const { Collection } = require("mongodb");

module.exports = function(db, app){
    //Route to manage the login of a user

    app.post('/api/sremove', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        
        let collection = db.collection('users');

        collection.deleteOne({'username':req.body.username}, (err, docs)=>{
            if (err) throw err;
            res.send({check: 1, err:""});
        })

    })
}