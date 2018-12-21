const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('../database');

app.use(express.static('public'));
app.use(bodyParser());

app.get('/reviews/:productId', (req, res) => {
  db.retrieve(req.params.productId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(results);
  });
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});