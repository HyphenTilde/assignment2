module.exports = function(db, app){
    //Route to manage the login of a user

    app.post('/api/login', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        let u = req.body.username;
        let p = req.body.password;
        const collection = db.collection('users');
        //check if user exists in collection
        collection.find({'username': u, 'password': p}).count((err, count)=>{
            if(count==0){
                //not found in database, sends error message
                res.send({check: 0, err: "User not found"});
            }else{
                //user is found in database and thus, confirmation is sent back
                res.send({check: 1, err: NULL});
            }
        })
    })
}