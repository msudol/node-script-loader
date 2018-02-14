// run this script on load, it creates a user prompt, quit will exit

var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('CMD> ');

rl.prompt();

rl.on('line', function(line) {
    
    // close if user types quit
    if (line === "quit") {
        rl.close();
    }
    else if (line.startsWith("inspect")) {
        newline = line.split(" "); 
        inspect(newline[1]);
        rl.prompt();
    }
    else {
        rl.prompt();
    }
    
}).on('close',function(){
    process.exit(0);
});

module.exports = rl;