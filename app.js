// jshint esversion:6
//const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Tell express to serve up the static files
app.use(express.static('public'));

app.get('/css-mysite', function (req, res) {
    res.sendFile(__dirname +'/index.html');
})

app.listen(3000||process.env.PORT, function () {
    console.log("Server is running on port 3000");
})