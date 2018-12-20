const Promise = require('bluebird');
const faker = require('faker');
const fs = Promise.promisifyAll(require('fs'));
const {db} = require('./index');

let generateProducts = function() {
	return Array.from({length:10},
		p => [faker.commerce.productName()]);
}

let generateAuthors = function() {
	return Array.from({length:10}, a => {
			return [
				faker.internet.userName(),
				faker.internet.avatar()
			];
		});
}

let generateReviews = function(num = 10) {
	return Array.from({length:num}, r => {
		return [
			faker.company.catchPhrase(),
			faker.hacker.phrase(),
			faker.date.past(),
			7,
			false,
			Math.floor(Math.random() * 9),
			Math.floor(Math.random() * 9)
		]
	});
}

let generateRatings = function(num = 10) {
	return Array.from({length:num}, r => {
		return [
			getRandomInt(0, 6),
			getRandomInt(0, 10),
			getRandomInt(0, 10)
		]
	})
}

let getRandomInt = function(start, stop) {
	return Math.floor((Math.random() * (stop - start)) + start);
}

console.log(generateRatings());

let popo = generateRatings().reduce((values, entry) => {
	return values + '(' + entry.join(',') + ')'
}, '');

let rates = generateRatings();
let reviews = generateReviews();

let convertToMySQL = (arr) => {
	return arr.map(i => {
		return `(${i.join(',')})`;
	}).join(',');
};

let q = 'INSERT INTO ratings (stars, review_id, product_id) VALUES ' + convertToMySQL(rates) + ';';
// let q = `INSERT INTO reviews (headline, body, posted, helpful, verified, author_id, product_id) VALUES ${convertToMySQL(reviews};`;
console.log(q);
db.query(q, (err, results) => {
	if (err) throw err;
	console.log('%%%%%%%%%%%%%%%%%%%%', results);
});
// fs.writeFileAsync('seed_products.txt', 
// 	products
// 	)
// 	.then(() => {
// 		console.log('wrote to file!');
// 	})
// 	.catch(err => {
// 		console.log('ERROR ERROR ERROR ERROR', err);
// 	});