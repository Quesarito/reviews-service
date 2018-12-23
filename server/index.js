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
    let data = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      count: results.length
    };
    let sum = 0;
    results.forEach(row => {
      data[row.stars]++;
      sum += row.stars;
    });
    data.average = (sum / data.count).toFixed(1);
    res.send(data);
  });
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});