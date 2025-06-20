-- Create the User table if it doesn't exist
BEGIN;
CREATE SCHEMA IF NOT EXISTS meals AUTHORIZATION DDNTTZ;

CREATE TABLE IF NOT EXISTS meals.food
(
	foodID        INT PRIMARY KEY generated always as identity,
    foodName      VARCHAR(255) NOT NULL,
    madePerson    VARCHAR(50) NOT NULL CHECK (madePerson IN ('TTZ', 'DDN')),
	vedioLink     VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS meals.tags
(
	tagID        INT PRIMARY KEY generated always as identity,
	tagName      VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS meals.foodtags
(
	tagID        INT REFERENCES meals.tags(tagID),
	foodID       INT REFERENCES meals.food(foodID),
	PRIMARY KEY (tagID, foodID)
);

COMMIT;
