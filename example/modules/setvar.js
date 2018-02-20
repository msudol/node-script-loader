/***
*    The purpose of this dangerous module is to just show that you can get to the globals.
*   Try running: (setvar config.test.world = "galaxy") while in the app console.
*/
    
var setvar = function(input) {

    // exposing eval to user input is dangerous, don't actually ever do this.
    try {
        eval(input);
        console.log("Running: " + input);
    }
    catch(err) { 
        console.trace(err);
    }
    
};

module.exports = setvar;