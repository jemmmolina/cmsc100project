'use strict';

const db = require(__dirname + '/mysql');

// View All Posts
exports.viewCommentsByPost= function(req, res){	//Get
	var query = "SELECT * FROM comment WHERE postId=?"
	db.query(query,
		[
			req.params.postId
		],
		function(err, result){
			if(err)return res.send(err);
			res.send(result);	
	});

};



