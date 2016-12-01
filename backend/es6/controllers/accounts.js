'use strict';

const db = require(__dirname + '/mysql');

// Create Account
exports.createAccount = function(req, res){	//Post
	var query = "INSERT INTO user (email, password, name) VALUES(?,?,?)"
	db.query(query,
		[
			req.body.email,
			req.body.password,
			req.body.name
		],
		function(err, result){
			if(err)return res.send(err);
			res.send("account successfully created");	
	});

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