// this will create an express web server that listens and logs any incoming requests

var express = require('express');

var exws = express();

var logger = function(req, res, next) {
    console.log("Request Received: " + req.url);
    next(); 
}

exws.use(logger);

exws.all('*', function(req, res){
    res.send('OK');
});

exws.listen(config.web.port);

console.log("Express Webserver Listening on Port: " + config.web.port);

module.exports = exws;