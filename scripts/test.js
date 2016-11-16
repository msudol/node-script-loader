var test = function() {
    
    setInterval(function(){ 
        
        console.log(config.test.hello + " " + config.test.world);
        
    }, 10000);

};

module.exports = test;