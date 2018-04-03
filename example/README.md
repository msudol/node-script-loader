# Node Script Loader Example

This is a full example of NSL that shows some of the features of the module and how to use it.

## Installation 

1. Copy the example/ source files to a Node.js enabled location.
2. Run> node app

## Info

This started out as just a test project I was playing with to create a loading system in Node.js

The concept is to create some subfolders in which the *.js extensions will simply load into the node app.

Currently:

- /config which load and are added to a global.config[filename] object.

- /modules which load and are given their own global[filename] object.

- /scripts which load and are executed.

