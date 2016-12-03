'use strict';

const client = require('mysql'),
	db = client.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'justletmein',
		database : 'gminus'
});

db.connect(function(){
	console.log('Database Connected!');
});

module.exports = db;
