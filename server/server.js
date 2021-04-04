const express = require('express');
const app = express();
const cors = require('cors');
const jobData = require('./data.json');

const SERVER_PORT = 3000;

app.use(cors());

app.get('/popular', (req, res) => {
  // TODO : load popular programming language data
  res.status(200).send([]);
});

app.get('/search', (req, res) => {
  // TODO : load job recruitment info data list
  res.status(200).send([]);
});

app.get('/search/:id', (req, res) => {
  // TODO : load job recruitment info data
  res.status(200).send({});
});

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening at http://localhost:${SERVER_PORT}`);
});
