// *********************************************************************************
// ORM.JS - THIS FILE DEFINE THE OBJECT-RELATIONAL MAPPING LOGIC
// *********************************************************************************

// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all SQL statement functions.
var orm = {

  // Return all the elements in the 'burgers_db.burgers' table
  selectAll: function (cb) {
    //var queryString = "SELECT * FROM burgers_db.burgers;";
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      // console.log(result);
      // res.send(result);
      cb(result);

    });
  },

  // Return all the elements in the 'burgers_db.burgers' table
  insertOne: function (burgerName, cb) {

    //var queryString = "INSERT INTO burgers_db.burgers (burger_name) VALUES (?);";
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?);";

    //console.log(queryString);
    connection.query(queryString, [burgerName], function (err, result) {
      if (err) throw err;
      console.log("Burger successfully added!");
      // console.log(result);
      cb(result);
    });
  },

  // Updates en element of 'burgers_db.burgers' table based on it's ID
  updateOne: function (condition, burgerId, cb) {
    //var queryString = "UPDATE burgers_db.burgers SET devoured = ? WHERE id = ?";
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";

    connection.query(queryString, [ condition, burgerId ], function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;