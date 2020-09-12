const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const access = require('../access/access');
const flashcardRoutes = require('./routes/flashcardRoutes.js')
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// add headers to response
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('cces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
})

app.use('/flashcards', flashcardRoutes)

mongoose
  .connect(access._db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Mongoose succesfully connected to a mongo database and ready to comply!`);
    app.listen(access._local, () => {
      console.log(`Express succesfully connected to a local port and ready to comply!`);
    });
  })
  .catch((error) => {
    console.log(`Error was encountered the db: ${error}`);
  })
