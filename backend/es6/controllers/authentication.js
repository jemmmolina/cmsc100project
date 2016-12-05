'use strict';

const db = require(__dirname + '/mysql');

exports.login = function(req, res, next) {

	function validatelogin() {

		// If there is a logged in user
		if (req.session && req.session.user) {
	        return res.send({ 'message' : 'Already logged in!' });
	    }

	    if (typeof req.body.email === 'undefined' || typeof req.body.password === 'undefined' || req.body.email === '' || req.body.password === '') {
			return res.send({'message' : 'Incomplete data!'});
		}

	    var query = 'SELECT COUNT(*) as count FROM user where email = ? LIMIT 1'
		db.query(query,
			[req.body.email], 
			function(err, result) {
				if (!err && typeof result !== 'undefined'){
					if (result[0].count !== 0) {
						checkpassword();
					}
					else {
						return res.status(404).send({'message': 'User does not exist!'});
					}
				}
				else {
					return res.status(404).send({ 'message' : 'User does not exist!'});
					// return res.status(404).send(err);	//{"code":"ER_NOT_SUPPORTED_AUTH_MODE","errno":1251,"sqlState":"08004","fatal":true}
				} 
			});
	}

	function checkpassword(){
		var query = 'SELECT COUNT(*) as count FROM user where email = ? AND password = ? LIMIT 1';
		db.query(query,
			[req.body.email, req.body.password],
			function(err, result){
				if (result[0].count === 1) {
					// console.log(result);
					let user = {
						email: req.body.email,
						password: req.body.password
					};
					req.session.user = user;
					req.session.save();
					return res.send({ 
						'message' : 'Succesfully logged in!',
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