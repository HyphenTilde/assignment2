module.exports = function(db, app){
    //Route to find if the user belongs to any groups and sends their names back

   app.post('/api/supgrade', function(req, res){
       if(!req.body){
           return res.sendStatus(400);
       }
       const collection = db.collection('users');
       collection.updateOne({username:req.body.username}, {$set:{role:"Super Admin"}}, ()=>{
            res.send({check:1, err:""});
       })
   });
}