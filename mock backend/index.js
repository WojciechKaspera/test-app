const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());

app.use(cors({
  origin: true
}));

app.post('/email', checkIfEmailExist);

function checkIfEmailExist(req, res) {
  const email = req.body.email;
  db.users.map(user => {
    if (user.email === email) {
      res.status(200).send();
      res.end();
    }
  });
  res.status(404).send();
  res.end();
}

app.listen(4201, () => console.log('Mock backend running on port 4201'));
