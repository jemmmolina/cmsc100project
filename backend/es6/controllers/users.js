'use strict';

const db = require(__dirname + '/mysql');

// Search User
exports.searchUser = function(req, res) {	//Get
	var nam = "%" + req.params.name + "%"
	console.log(nam)

	var query = "SELECT * FROM user WHERE name LIKE ?"
	db.query(query,
		[
			nam
		],
		function(err, result){
			if(err)return res.send(err);
			res.send(result);	
	});

};

exports.getCurrentUser = function(req, res) {
	var email = req.session.user.email;

	var query = "SELECT * FROM user WHERE email = ?"
	db.query(query,
		[
			email
		],
		function(err, result) {
			if(err)return res.send(err);
			console.log(result);
			res.send(result);


		});
};