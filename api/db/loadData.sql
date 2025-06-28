BEGIN;
INSERT INTO meals.food (foodName, madePerson)
VALUES
    ('test food 1', 'TTZ'),
	('test food 2', 'DDN');
COMMIT;