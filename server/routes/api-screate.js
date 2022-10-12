const { Collection } = require("mongodb");

module.exports = function(db, app){
    //Route to manage the login of a user

    app.post('/api/screate', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        let user = req.body;
        user.role = "Group Admin";
        let collection = db.collection('users');

        collection.insertOne(user, (err, dbres)=>{
            if (err) throw err;
            res.send({check: 1, err:""});
        })

    })
}