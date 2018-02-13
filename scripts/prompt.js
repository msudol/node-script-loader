// run this script on load, it creates a user prompt, quit will exit

var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('CMD> ');

rl.prompt();

rl.on('line', function(line) {
    
    // close if user types quit
    if (line === "quit") rl.close();
    
    // could put a switch or if/else bundle in here for other console commands
    
    
    // else, add the prompt again
    rl.prompt();
    
}).on('close',function(){
    process.exit(0);
});

module.exports = rl;