'use strict';

const db = require(__dirname + '/mysql');

// Create Account
exports.createAccount = function(req, res){	//Post

	function addUser(){

		if (typeof req.body.name === 'undefined' || typeof req.body.email === 'undefined' || typeof req.body.password === 'undefined') {
			return res.send({'message' : 'Incomplete data!'});
		}
		var query = 'SELECT COUNT(*) as count FROM user where email = ? LIMIT 1';
		db.query(query,
			[req.body.email],
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
									'message' : 'Account successfully created!',
									'email': req.body.email
								});
							}
					});

					
				}
				else if (result[0].count !== 0) {
					return res.send({'message' : 'Email already taken!'});
				}
				else {
					return res.send({ 'message' : 'Unsuccessful registration!'});
					// return res.send(result);
				} 
			}
		);
	}

	addUser();
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