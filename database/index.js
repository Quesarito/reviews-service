const mysql = require('mysql');
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'amazon_reviews'
});

db.connect();

exports.db = db;
exports.mysql = mysql;