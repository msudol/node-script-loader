# Node Script Loader

A simple system to dynamically load scripts from subdirectories without the need for require statements.

## Usage

### Initialize the loader: 

```var loader = require("node-script-loader");```

### Call the loader

loader(dir, isExecute, isObj, logging)
* @param {string} dir - The relative location in the app root to load files from. Only loads single level directories.
* @param {Boolean} isExecute - Indicate that upon load this module should also be run (if it resolves to a function).
* @param {Boolean} isObj - Indicate that this load will be as part of a parent object with the directory name at the head.
* @param {Boolean} logging - Enable logging to the console where applicable.
 
### Filenaming and other notes

Scripts loaded from the loader will be imported using the filename regardless of what the module "exports". For example, if a loaded file is named "test.js", the variable the module is imported as will be "test".

Setting isObj to TRUE will create a global variable using the directory name, and attach all the other imported modules as a child of that parent object, great for configs.

### Examples

Working examples can be found in the examples folder of the project source.

