const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('../database');

app.use(express.static('public'));
app.use(bodyParser());

app.get('/reviews/:productId', (req, res) => {
  db.retrieve(req.params.productId, 'complete', (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(results);
  });
});

app.get('/reviews_summary/:productId', (req, res, next) => {
  db.retrieve(req.params.productId, 'summary', (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    let allStars = results.reduce((sum, row) => {
      return sum + row.stars;
    }, 0);
    let data = {
      average: (allStars / results.length).toFixed(2),
      count: results.length
    };
    res.send(data);
  });
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});