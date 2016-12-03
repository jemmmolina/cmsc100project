'use strict';

const db = require(__dirname + '/mysql');

// View All Posts
exports.viewAllPosts = function(req, res){	//Get
	var query = "SELECT * FROM post"
	db.query(query,
		function(err, result){
			if(err)return res.send(err);
			res.send(result);	
	});

};

// View All Posts
exports.viewSpecificPosts= function(req, res){	//Get
	var query = "SELECT * FROM post WHERE postId=?"
	db.query(query,
		[
			req.params.postId
		],
		function(err, result){
			if(err)return res.send(err);
			res.send(result);	
	});

};

// View All Posts
exports.viewPostsByUser= function(req, res){	//Get
	var query = "SELECT * FROM post WHERE userId=?"
	db.query(query,
		[
			req.params.userId
		],
		function(err, result){
			if(err)return res.send(err);
			res.send(result);	
	});

};

// Create Post
exports.createPost = function(req, res){	//Post
	var query = "INSERT INTO post (userId, postContent, timestamp) VALUES(?,?,?)"
	db.query(query,
		[
			req.body.userId,
			req.body.postContent,
			req.body.timestamp
		],
		function(err, result){
			if(err)return res.send(err);
			res.send("post successfully created");	
	});

};

// Update Post
exports.updatePost = function(req, res){	//Update
	var query = "UPDATE post SET postContent=? WHERE postId=?"
	db.query(query,
		[
			req.body.postContent,
			req.body.postId
		],
		function(err, result){
			if(err)return res.send(err);
			res.send("post successfully updated");	
	});

};

// Delete Post
exports.deletePost = function(req, res){	//Delete
	var query = "DELETE FROM post WHERE postId=?"
	db.query(query,
		[
			req.body.postId
		],
		function(err, result){
			if(err)return res.send(err);
			res.send("post successfully deleted");	
	});

};