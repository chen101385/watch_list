const express = require('express');
const bodyParser = require('body-parser');
const db = require('../server');

const app = express();

app.use(bodyParser.json());

app.get('/movies', (req, res) => {

})

app.listen(3000, () => console.log("listening on port 3000"));