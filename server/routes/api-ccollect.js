module.exports = function(db, app){
    //Route to find if the user belongs to any groups and sends their names back

   app.post('/api/ccollect', function(req, res){
       if(!req.body){
           return res.sendStatus(400);
       }
       let id = req.body.send;
       console.log(id);
       const collection = db.collection('channels');
       collection.find({'user_ids': [id]}).toArray((err, data)=>{
           console.log(data);
           res.send(data);
       })
   });
}