const db = require('../database');

const getReviewData = (req, res, next) => {
  db.retrieve(req.params.productId, req.query.reviewType, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.reviewData = results;
    next();
  });
};

const getStarData = (req, res, next) => {
  let starData = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    count: res.reviewData.length
  };
  let sum = 0;
  res.reviewData.forEach(row => {
    starData[row.stars]++;
    sum += row.stars;
  });
  starData.average = (sum / starData.count).toFixed(1);
  res.starData = starData;
  next();
};

module.exports = {getReviewData, getStarData};