/***
* Just a test app to play with some script loading ideas. 
* This may not be considered appropriate, especially usage of the global space, don't shoot me.
***/

// require our loader
var loader = require("node-script-loader");


/***** CONFIG LOAD *****/

// init a global "config" by requiring config/index.js 
// anything declared in the index.js which exports "config" will be available as a global app wide
global.config = require("./config");

// loader(dir, callback)
loader("config", function(file, dir) {
    
    // list our files
    console.log("Loading: "+dir+"/"+file);

    // break the .js extension off 
    moduleName = file.split(".");

    // we assume the module.exports = the filename, and load it into a global here
    if (moduleName == "index") {
        // manually loaded above as the global.config.
    }
    else {
    	// load the exported module as config.name
        config[moduleName[0]] = require("./"+ dir +"/" + file);
    }
 
});


/***** MODULE LOAD *****/

// loader(dir, callback)
loader("modules", function(file, dir) {

	// list our files
	console.log("Loading: "+dir+"/"+file);

	// break the .js extension off 
	moduleName = file.split(".");

	// we assume the module.exports = the filename, and load it into a global here
	global[moduleName[0]] = require("./"+ dir +"/" + file);

});


/***** SCRIPT LOAD *****/

// we don't need to load scripts into the global scope, create a scripts object
var scripts = {};

// loader(dir, callback)
loader("scripts", function(file, dir) {
   
    // list our files
    console.log("Loading: "+dir+"/"+file);

    // break the .js extension off 
    var scriptName = file.split(".");
  
    // we assume the module.exports = the filename, and load it into a global here
    scripts[scriptName[0]] = require("./"+ dir +"/" + file);
  
    // check if the newly created global is a function, if it is, run it!
    typeof scripts[scriptName[0]] === 'function' && scripts[scriptName[0]]();
  
});


//TODO: actually pass this stuff as arguments to the loader, the callbacks are so similar...  should look like this


/*

loader(String directoryName, String objectName, Boolean isGlobal, Boolean isExecute)



*/