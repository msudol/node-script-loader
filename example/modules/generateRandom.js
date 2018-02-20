// a basic function to generate a random number

var generateRandom = function generateRandom(start, count) {
        
    var amount = count || 100;
    
    var begin = start || 0;
    
    return Math.floor((Math.random() * amount) + begin); 
    
};

module.exports = generateRandom;