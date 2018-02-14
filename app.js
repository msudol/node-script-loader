/***
* Just a test app to play with some script loading ideas. 
* This may not be considered appropriate, especially usage of the global space, don't shoot me.
***/

// require our loader
var loader = require("node-script-loader");

/* 
    This example loads up a config in the global scope based on the directory "config".
*/
loader("config", false, true);

/*
    This example loads up the modules in a global scope based on the module filename and NOT as a child of "modules"
*/
loader("modules", false, false);

/*
    This example attempts to run the files as functions that it locates in the "scripts" folder
*/
loader("scripts", true, false);

