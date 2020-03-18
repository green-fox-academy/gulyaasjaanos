CREATE TABLE todoapp (
    id INTEGER AUTO_INCREMENT PRIMARY,
    task VARCHAR(50),
    active BOOLEAN,
    completed BOOLEAN,
);

DROP TABLE todoapp;
INSERT INTO todoapp (task,active,completed) 
    VALUES ("creating a list",true,true),
    ("finding uni",true,true),
    ("being spontaneous",true,true);