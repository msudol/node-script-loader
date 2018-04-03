// this will create an express web server that listens and logs any incoming requests

var express = require('express');

var exws = express();

var logger = function(req, res, next) {
    console.log(req.method + " Request Received to: " + req.url + " From: " + req.ip);
    next(); 
}

exws.use(logger);

exws.all('*', function(req, res){
    res.send('OK');
});

// config option is set in the script loader config directory
exws.listen(config.web.port);

console.log("Express Webserver Listening on Port: " + config.web.port);

module.exports = exws;