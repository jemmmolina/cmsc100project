'use strict';

let config = require('../config/config');

const client = require('mysql'),
	db = client.createConnection({
		host     : config[config.ENV].HOST,
		user     : config[config.ENV].USERNAME,
		password : config[config.ENV].PASSWORD,
		database : config[config.ENV].DATABASE
});

db.connect(function(){
	console.log('Database Connected!');
});

module.exports = db;
