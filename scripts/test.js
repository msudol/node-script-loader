// run this script on load, it will pull the values from config.test in /config

var test = function() {
    
    setInterval(function(){ 
        
        console.log(config.test.hello + " " + config.test.world);
        
    }, 10000);

};

module.exports = test;