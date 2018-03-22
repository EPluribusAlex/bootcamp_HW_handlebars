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
			if(typeof calue === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

// all statement functions
const orm = {
	all: function(tableInput, cb) {
		const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if(err) throw err;
      cb(res);
    });
	},
	create: function(table, cols, vals, cb) {
    const queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  update: function(table, objColVals, condition, cb) {
    const queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
    console.log(queryString);
    connection.query(queryString, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  delete: function(table, condition, cb) {
    let queryString = "DELETE FROM " + table + " WHERE " + condition;
    connection.query(queryString, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }
}

module.exports = orm;