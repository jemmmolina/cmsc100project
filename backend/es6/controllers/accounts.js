'use strict';

const db = require(__dirname + '/mysql');

// Create Account
exports.createAccount = function(req, res){	//Post
	function validateuser() {
		
		// If there is a logged in user
		if (req.session && req.session.user) {
	        return res.send({ 'message' : 'Already logged in!' });
	    }

	    var query = 'SELECT COUNT(*) as count FROM user where email = ? LIMIT 1'
		db.query(query,
			[req.body.email], 
			function(err, result) {
				if (!err && typeof result !== 'undefined'){
					if (result[0].count === 0) {
						checkpassword();
					}
					else {
						return res.status(404).send({'message': 'User already exists!'});
					}
				}
				else {
					return res.status(404).send({ 'message' : 'User does not exist!'});
					// return res.status(404).send(err);	//{"code":"ER_NOT_SUPPORTED_AUTH_MODE","errno":1251,"sqlState":"08004","fatal":true}
				} 
			});
	}
	
	function checkpassword(){
		var query = 'SELECT COUNT(*) as count FROM user where password = ? LIMIT 1';
		db.query(query,
			[req.body.password],
			function(err, result){
				if (result[0].count === 0) {
					 console.log(result);
					var query = "INSERT INTO user (email, password, name) VALUES(?,?,?)"
					db.query(query,
						[
							req.body.email,
							req.body.password,
							req.body.name
						],
						function(err, result){
							if(err)return res.send(err);
							else{
								let user = {
								email: req.body.email,
								password: req.body.password
								};
								// req.session.user = user;
								return res.send({ 
									'message' : 'account successfully created!',
									'email': req.body.email
								});
							}
					});

					
				}
				else {
					return res.send({ 'message' : 'Password exists!'});
					// return res.send(result);
				} 
			}
		);
	}

	validateuser();
};

// View All Accounts
exports.viewAllAccounts = function(req, res){	//Get
	var query = "SELECT * FROM user"
	db.query(query,
		function(err, result){
			if(err)return res.send(err);
			res.send(result);	
	});

};