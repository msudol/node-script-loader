// because this file is names Z it should load at the end.

var zLast = function() {
      
    console.log("Type help or ? to see a list of prompt commands");

    //call on ../modules/rl.js to set prompte
    rl.prompt();
    
};

module.exports = zLast;