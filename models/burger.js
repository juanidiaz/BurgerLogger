// *********************************************************************************
// BURGER.JS - THIS FILE DEFINE THE MODEL
// *********************************************************************************

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function (burgerName, cb) {
        orm.insertOne(burgerName, function (res) {
            cb(res);
        });
    },

    updateOne: function (condition, burgerId, cb) {
        orm.updateOne(condition, burgerId, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;