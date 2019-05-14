const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// require('./app/routing')(app)
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// require('./config').connect(_ => app.listen(3000))
app.listen(3000, function() {
    console.log("App listening on PORT: " + 3000);
  });