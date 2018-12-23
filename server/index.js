const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const {getStarData, getReviewData} = require('./getReviews.js');

app.use(express.static('public'));
app.use(bodyParser());

app.get('/reviews/:productId', 
  getReviewData, 
  getStarData, 
  (req, res) => {
    let {starData, reviewData} = res;
    (req.query.reviewType === 'summary')
      ? res.send({starData})
      : res.send({starData, reviewData});
  }
);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});