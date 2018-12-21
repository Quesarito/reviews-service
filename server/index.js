const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const {db, retrieve} = require('../database');

app.use(express.static('public'));
app.use(bodyParser());

// app.get('/', (req, res) => {
//   res.send('hihi');
// });

app.get('/reviews', (req, res) => {
  retrieve(41, (err, results) => {
    res.send(results);
  });
  
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});