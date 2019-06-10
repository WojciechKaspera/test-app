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
app.post('/login', login);

function checkIfEmailExist(req, res) {
  const email = req.body.email;
  db.users.map(user => {
    if (user.email === email) {
      res.status(200).send();
    }
  });
  res.status(404).send();
}

function login(req, res) {
  const credentials = {...req.body};
  db.users.find(user => user.email === credentials.email).password === credentials.password ? res.status(200) : res.status(403);
  res.send();
}

app.listen(4201, () => console.log('Mock backend running on port 4201'));
