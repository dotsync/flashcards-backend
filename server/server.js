/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const access = require('../access/access');
// const flashcardSchema = require('./models/flashcardSchema');
const flashcardRoutes = require('./routes/flashcardRoutes.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// add headers to response
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});
// err handler
app.use((err, req, res, next) => {
  if (res.headerSent) {
    next(err);
  }
  res.status(err.code || 500);
  res.json({ message: err.message || 'Something strange happend' });
});

app.use('/flashcards', flashcardRoutes);

mongoose
  .connect(access._db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('Mongoose succesfully connected to a mongo database and ready to comply!');
    app.listen(access._local, () => {
      console.log('Express succesfully connected to a local port and ready to comply!');
    });
  })
  .catch((error) => {
    console.log(`Error was encountered the db: ${error}`);
  });
