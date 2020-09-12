const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const access = require('../access/access');
const app = express();
// middle ware
app.use(bodyParser.json());
app.use(express.static('public'));

// routes

// connect to mongoose [incomplete]
mongoose
  // _db must be set in access folder
  .connect(access._db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Mongoose succesfully connected to mongo database and ready to comply!`);
    app.listen(access._local, () => {
      console.log(`Express succesfully connected to local port and ready to comply!`);
    });
  })
  .catch((error) => {
    console.log(`Error was encountered the db: ${error}`);
  })
