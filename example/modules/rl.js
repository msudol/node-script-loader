// run this script on load, it creates a user prompt, quit will exit

var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('CMD> ');

rl.on('line', function(line) {
    
    // close if user types quit
    if (line === "quit") {
        rl.close();
    }
    // run the modules/insepect code
    else if (line.startsWith("inspect")) {
        var newline = line.split(" "); 
        inspect(newline[1]);
        rl.prompt();
    }
    // run the setvar code (eval a string basically)
    else if (line.startsWith("setvar")) {
        var newline = line.substr(line.indexOf(' ')+1); 
        setvar(newline);
        rl.prompt();
    }    
    // run the setvar code (eval a string basically)
    else if (line.startsWith("?") || line.startsWith("help")) {
        console.log("Try the following commands out:  \n > inspect config \n > setvar config.test.world = 'earth' \n > quit");
        rl.prompt();
    }        
    else {
        rl.prompt();
    }
    
}).on('close',function(){
    process.exit(0);
});


module.exports = rl;