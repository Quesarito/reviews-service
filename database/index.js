const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'amazon_reviews'
});

db.connect();

//Takes an object stating the search criteria
const retrieve = (productId, callback) => {
  //product id as search criteria
  let query = `SELECT sub.*, media.file 
  FROM (SELECT products.name AS productName, 
    reviews.headline AS headline, 
    reviews.id AS reviewId FROM products, reviews 
    WHERE products.id = reviews.product_id 
    AND reviews.product_id = ?) sub 
  LEFT JOIN media ON media.review_id = sub.reviewId;
    `;
  db.query(query, productId, (err, results) => {
    if (err) { throw err; }
    console.log(results);
    callback(null, results);
  });
};

exports.db = db;
exports.retrieve = retrieve;