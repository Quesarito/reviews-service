const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const {getStarData, getReviewData, getFeatureData} = require('./getReviews.js');

app.use(express.static('public'));
app.use(bodyParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/reviews/:productId', 
  getReviewData, 
  getStarData, 
  getFeatureData,
  (req, res) => {
    let {starData, reviewData, featureData} = res;
    (req.query.reviewType === 'summary')
      ? res.send({starData})
      : res.send({starData, reviewData, featureData});
  }
);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});