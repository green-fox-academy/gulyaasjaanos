CREATE TABLE boxoffice (
    movie_id INTEGER,
    rating REAL,
    domestic_sales INTEGER,
    international_sales INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);