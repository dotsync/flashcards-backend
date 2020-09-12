const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const access = require('../access/access');
const app = express();
// middle ware
app.use(bodyParser.json())
app.use(express.static('public'))

// routes

// connect to mongoose [incomplete]
mongoose
  // _db must be set in access folder
  .connect(access._db)
  .then(() => {
    console.log('Connected to the db!');
    app.listen(access._local, () => {
      console.log(`Express succesfully connected to local port and on standby.`)
    });
  })
  .catch((err) => {
    console.log(`Error was encountered: ${err}`)
    // remove this app.listen once succesfully connected to db
    console.log('Could NOT connect to the db! Trying express now')
    app.listen(access._local, () => {
      console.log(`Express succesfully connected to local port and on standby.`)
    });
  })
