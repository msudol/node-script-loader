var getRandom = function() {

    setInterval(function(){ 
  
        console.log(generateRandom(config.random.start, config.random.count));
        
    }, 5000);

};

module.exports = getRandom;
