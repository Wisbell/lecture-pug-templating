'use strict';

const express = require('express');
const app = express();

// tell express to look in the public folder by default
app.use(express.static('public'));

// configure pug
app.set('view engine', 'pug');


const names = ['Larry', "Moe", "Cury", "Mr. Rogers"];

app.get('/', (req, res, next) => {
  // res.render('index', {"subtitle": "This came from my JS data", "names": names, "loggedIn": false}) // es5
  res.render('index', {subtitle: "This came from my JS data", names, loggedIn: false}) // es6
})


const port = process.env.PORT || 3000
// app.set('port', port)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
