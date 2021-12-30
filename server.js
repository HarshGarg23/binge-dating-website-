const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser")
// const fs = require("fs");
const port = 5000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('view')) // For serving static files
app.use('/static', express.static('js')) // For serving static files
app.use('/static', express.static('images')) // For serving static files
app.use(express.urlencoded())

  // app.set('view engine', 'ejs') // Set the template engine as pug
  // // app.use('/static', express.static(path.join(__dirname, 'view')))
  // // app.use('/static', express.static(path.join(__dirname, 'images')))
  // // app.use('/static', express.static(path.join(__dirname, 'js')))
  // // app.use('/static', express.static('view'))

  
  // ENDPOINTS

  app.get('/', (req, res) => {
    // const params = {}
    res.status(200).render('index.html');
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






























