-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db; 

-- Create the burgers_db database and specify it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);

-- Get the first 10 elements of the new table
SELECT * FROM burgers_db.burgers LIMIT 10;
