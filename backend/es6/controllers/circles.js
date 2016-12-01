'use strict';

const db = require(__dirname + '/mysql');

// View All Circles
exports.viewAllCircles = function(req, res){	//Get
	var query = "SELECT * FROM circle"
	db.query(query,
		function(err, result){
			console.log(err);
			if(err)return res.send(err);
			res.send(result);	
	});

};

// Create Circle
exports.createCircle = function(req, res){	//Post
	var query = "INSERT INTO circle (circleName) VALUES(?)"
	db.query(query,
		[
			req.body.circleName
		],
		function(err, result){
			if(err)return res.send(err);
			res.send("circle successfully created");	
	});

};

// Update Circle
exports.updateCircle = function(req, res){	//Update
	var query = "UPDATE circle SET circleName=? WHERE circleId=?"
	db.query(query,
		[
			req.body.circleName,
			req.body.circleId
		],
		function(err, result){
			if(err)return res.send(err);
			res.send("circle successfully updated");	
	});

};

// Delete Circle
exports.deleteCircle = function(req, res){	//Delete
	var query = "DELETE FROM circle WHERE circleId=?"
	db.query(query,
		[
			req.body.circleId
		],
		function(err, result){
			if(err)return res.send(err);
			res.send("circle successfully deleted");	
	});

};