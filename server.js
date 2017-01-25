var express = require('express');
//var mongoose = require('mongoose');

// var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';
//
// // Connect to the DB
// mongoose.connect(url);
//
// var db = mongoose.connection;
//
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function(callback) {
//     console.log("Connection succeeded, connected to db instance. Url is " + url);
// });
var connectionString = 'mongodb://127.0.0.1:27017/test';
if(process.env.MONGOLAB_URI){
    connectionString = process.env.MONGOLAB_URI
}
// if(process.env.MLAB_USERNAME) {
//     connectionString = process.env.MLAB_USERNAME + ":" +
//         process.env.MLAB_PASSWORD + "@" +
//         process.env.MLAB_HOST + ':' +
//         process.env.MLAB_PORT + '/' +
//         process.env.MLAB_APP_NAME;
// }

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);

var port = process.env.PORT || 3000;

app.listen(port);