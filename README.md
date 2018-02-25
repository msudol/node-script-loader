# Node Script Loader

A simple system to dynamically load scripts from subdirectories without the need for require statements.

## Usage

### Initialize the loader: 

```var loader = require("node-script-loader");```

### Call the loader

loader(dir, isExecute, isObj, logging)
* @param {string} dir - The relative location in the app root to load files from.
* @param {Boolean} isExecute - Indicate that upon load this module should also be run.
* @param {Boolean} isObj - Indicate that this load will be as part of a parent object with the directory name at the head.
* @param {Boolean} logging - Enable logging to the console where applicable.

### Examples

Working examples can be found in the examples folder of the project soure.