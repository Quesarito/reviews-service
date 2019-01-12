CREATE TABLE products (
	id serial NOT NULL PRIMARY KEY,
	name character(200)
);

CREATE TABLE authors (
	id serial NOT NULL PRIMARY KEY,
	username character(100),
	avatar character(200)
);

CREATE TABLE reviews (
	id serial NOT NULL PRIMARY KEY,
	headline character(80),
	body character(5000),
	stars INTEGER,
	posted DATE NOT NULL,
	helpful INTEGER,
	verified BOOLEAN DEFAULT false,
	author_id INTEGER,
	product_id INTEGER,
	FOREIGN KEY (author_id) REFERENCES authors(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE features (
	id serial NOT NULL PRIMARY KEY,
	feature character(80),
	rating double precision,
	count INTEGER,
	product_id INTEGER,
	FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE media (
	id serial NOT NULL PRIMARY KEY,
	type character(5),
	file character(200),
	review_id integer,
	FOREIGN KEY (review_id) REFERENCES reviews(id)
);