// setup MySQL connection
const mysql = require("mysql");

const connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "zephyr98",
	database: "cat_db"
});

// establish connection to database
connection.connect((err) => {
	if(err) {
		console.error(`error connecting: ${err.stack}`);
		return;
	}
	console.log("connection id " + connection.threadId);
})

module.exports = connection;