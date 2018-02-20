/**
 * Node Script Loader - A simple system to automatically load folders of node.js modules
 * @license Apache-2.0
 *
 *  https://github.com/msudol/node-script-loader
 */

// require file system
var fs = require("fs");

// require path
var path = require("path");

// fetcher function takes directory and a callback
var fetcher = function(dir, callback) {
    
    // set the app root so we can use relative path in our loader call
    var appRoot = process.cwd();
    
    // load the directory 
    var loadPath = path.join(appRoot, dir);
        
    var appRoot = process.cwd();
    
    var loadPath = path.join(appRoot, dir);
    
    fs.readdirSync(loadPath).forEach(function(file) { 
    
        callback(file, loadPath);
    
    });        

};

/** @function
 * @name loader
 * @desciption Loader iterates a directory for node.js module files and assigns them based on the params
 * @param {string} dir - The relative location in the app root to load files from.
 * @param {Boolean} isExecute - Indicate that upon load this module should also be run.
 * @param {Boolean} isObj - Indicate that this load will be as part of a parent object with the directory name at the head.
 * @param {Boolean} logging - Enable logging to the console where applicable.
*/ 
var loader = function(dir, isExecute, isObj, logging) {
    
    fetcher(dir, function(file, loadPath) {

        // break the .js extension off 
        moduleName = file.split(".");

        // check for .js extension only
        if (moduleName[1] != "js") {
            if (logging) console.log("Skipping: " + loadPath + "/" + file);
            return;
        }
        
        // if it's executable just execute it
        if (isExecute) {
            if (logging) console.log("Running: " + loadPath + "/" + file);
            var script = require(loadPath + "/" + file); 
            // if it doesn't run itself, see if it's typed as a function and try running it.
            if (typeof script === 'function') {
                script();
            }
            else {
                console.warn("Failed to execute: " + loadPath + "/" + file + " as a function");
            }
        }        

        // if isObj is set, create this as an object within the "dir" as the parent obj.
        else if (isObj) {
            if (moduleName[0] == "index") {
                if (logging) console.log("Loading Index: " + loadPath + "/");
                global[dir] = require(loadPath + "/");
            }
            else {
                if (logging) console.log("Loading: " + loadPath + "/" + file);
                global[dir][moduleName[0]] = require(loadPath + "/" + file);  
            }
        }
        
        // just load the module as is
        else { 
            if (moduleName[0] == "index") {
                if (logging) console.log("Loading Index: "+ loadPath + "/");          
                global[dir] = require(loadPath + "/");              
            }
            else {
                if (logging) console.log("Loading: " + loadPath + "/" + file);
                global[moduleName[0]] = require(loadPath + "/" + file);  
            }
        }
        
    });
        
};
    
module.exports = loader;