'use strict';

const db = require(__dirname + '/mysql');


exports.login = function(req, res, next) {

	function validatelogin() {
		
		// If there is a logged in user
		if (req.session && req.session.user) {
	        return res.send({ 'message' : 'Already logged in!' });
	    }

	    var query = 'SELECT COUNT(*) as count FROM admin where email = ? LIMIT 1'
		db.query(query,
			[req.body.email], 
			function(err, result) {
				if (result.length) {
					// console.log(result);
					checkpassword();
				}
				else {
					return res.status(404).send({ 'message' : 'User does not exist!'});
					// return res.status(404).send(err);	//{"code":"ER_NOT_SUPPORTED_AUTH_MODE","errno":1251,"sqlState":"08004","fatal":true}
				} 
			});
	}

	function checkpassword(){
		var query = 'SELECT COUNT(*) as count FROM admin where email = ? AND password = ? LIMIT 1';
		db.query(query,
			[req.body.email, req.body.password],
			function(err, result){
				if (result[0].count === '1') {
					// console.log(result);
					let user = {
						email: req.body.email,
						password: req.body.password
					};
					// req.session.user = user;
					return res.send({ 
						'message' : 'Succesfully Logged In!',
						'email': req.body.email
					});
				}
				else {
					return res.send({ 'message' : 'Wrong password!'});
					// return res.send(result);
				} 
			}
		);
	}

	validatelogin();
};