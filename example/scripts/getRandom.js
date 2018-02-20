// Run this script, it will use the generate random module, using the config.random config.

var getRandom = function() {

    setInterval(function(){ 
  
        console.log(generateRandom(config.random.start, config.random.count));
        
    }, 5000);

};

module.exports = getRandom;
