const access = require('../access/access')

const express = require('express');
const bodyParser = require('body-parser');
// set up middle ware
const app = express();

app.use(bodyParser.json())
app.use(express.static('public'))







// setup routes
// connect to mongoose
app.listen(access.local, () => {
  console.log(`Express succesfully connected to local port and on standby.`)
})
