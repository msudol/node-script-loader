/***
* Just a test app to play with some script loading ideas. 
* This may not be considered appropriate, especially usage of the global space, don't shoot me.
***/

// require our loader
var loader = require("node-script-loader");

/* 
    This example loads the files in /config, not executing, and as children of the "config" object.
*/
loader("config", false, true);

/*
    This example loads the files in /modules, not executing, based on the filename and NOT as a child of "modules"
*/
loader("modules", false);

/*
    This example attempts to run the files as functions that it locates in the "scripts" folder, not as a child, with logging on
*/
loader("scripts", true, false, true);

