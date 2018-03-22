// dependencies
const connection = require("../config/connection.js");

// utilize "?" to pass multiple value into sql query
function printQuestMarks(num) {
	let arr = [];
	num.forEach((mark) => arr.push("?"));
	return arr.toString();
}

// convert obj to sql syntax
function objToSql(obj) {
	let arr = [];
	for(let key in obj) {
		let value = obj[key];
		if(Object.hasOwnPropery.call(obj, key)) {
			if(typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

// all statement functions
const orm = {
	selectAll: function(tableInput, cb) {
		const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, res) => {
      if(err) throw err;
      cb(res);
    });
	},
	insertOne: function(table, cols, vals, cb) {
    const queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") ";
    console.log(queryString);
    connection.query(queryString, vals, (err, res) => {
      if(err) throw err;
      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    const queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if(err) throw err;
      cb(res);
    });
  }
}

module.exports = orm;