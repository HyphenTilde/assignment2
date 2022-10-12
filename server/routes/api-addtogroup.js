module.exports = function(db, app){
    //Route to find if the user belongs to any groups and sends their names back

    app.post('/api/addtogroup', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        const collection = db.collection('groups');
        collection.updateOne({name: req.body.group}, {$push:{user_ids: req.body.username}}, ()=>{
            res.send({check:1, err:""});
        })
    });
}