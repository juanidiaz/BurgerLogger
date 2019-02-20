-- Specify to use burgers_db for use 
USE burgers_db;

-- Insert a set of records.
INSERT INTO burgers_db.burgers (burger_name, devoured)
VALUES ('All stuffed burger', false);

INSERT INTO burgers_db.burgers (burger_name, devoured)
VALUES ('Double Cheese Burger', false);

INSERT INTO burgers_db.burgers (burger_name, devoured)
VALUES ('Veggie Burger', false);

-- Get the first 10 elements of the new table
SELECT * FROM burgers_db.burgers LIMIT 10;
