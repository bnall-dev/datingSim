const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const db = require('./db/db');
const bodyParser = require('body-parser');

//to change git remote: git remote set-url origin (new.git.url/here)

//////////////////use///////////////////
app.use(express.json());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
app.use(bodyParser.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 3000;
db.sync()
  .then(() => {
    console.log('db synced');
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((ex) => console.log(ex));
