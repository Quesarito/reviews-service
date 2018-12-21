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
  let query = `SELECT revs.*, media.file, 
    ratings_feature.feature, ratings_feature.rating AS featureRating 
  FROM (SELECT products.name AS productName,
    reviews.* FROM products, reviews 
    WHERE products.id = reviews.product_id 
    AND reviews.product_id = ?) revs 
  LEFT JOIN media ON media.review_id = revs.id
  LEFT JOIN ratings_feature ON ratings_feature.product_id = revs.product_id;
    `;
  db.query(query, productId, (err, results) => {
    if (err) { throw err; }
    console.log(results);
    callback(null, results);
  });
};

exports.db = db;
exports.retrieve = retrieve;