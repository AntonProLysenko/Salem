const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const { createRequire } = require('module');

require('dotenv').config() // Always require and configure near the top

require("./config/database");

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
//app.use(favicon(path.join(__dirname, "build", "favicon.ico")))// dirname helps us to get a path from our root directory// build is our folder
app.use(express.static(path.join(__dirname, "build")))//with this line of miidleware we are getting our react app to be served by the express miidleware
app.use(require('./config/checkToken'))

// Put API routes here, before the "catch all" route
app.use('/api/users', require("./routes/api/users"))

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", (req, res) => {//helps to serve the index.htm when we are not doing API request
  res.sendFile(path.join(__dirname, "build", "index.html"))//sendig our index.html frob build folder
})

const PORT = process.env.PORT || 3001//if we don't have port in .env it is automaticaly running on 3001

app.listen(PORT, () => {
  console.log(`Express app is running on port: ${PORT}`)
})

