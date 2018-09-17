const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);

//public folders where the user catches dependencies
app.use(express.static(path.resolve(__dirname, __dirname)) );
//it returns a main page to play the game
app.get('/', function(req, res) {
res.sendFile('index.html', {root: __dirname });
});

http.listen(3000, function(){
console.log('listening on: 3000!');
});