const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('../public'));

app.use(bodyParser());

app.get('/reviews', (req, res) => {
	res.send('hi');
});

app.listen(port, (err) => {
	if (err) throw err;
	console.log('Now listening on port ' + port);
});