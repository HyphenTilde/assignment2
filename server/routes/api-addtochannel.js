module.exports = function(db, app){
    //Route to find if the user belongs to any groups and sends their names back

    app.post('/api/addtochannel', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        const collection = db.collection('channels');
        collection.updateOne({name: req.body.channel}, {$push:{user_ids: req.body.username}}, ()=>{
            res.send({check:1, err:""});
        })
    });
}