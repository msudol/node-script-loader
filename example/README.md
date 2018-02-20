This is just a test project I was playing with to create a loading system in Node.js

The concept is to create some subfolders in which the *.js extensions will simply load into the node app.

Currently:

- /config which load and are added to a global.config[filename] object.

- /modules which load and are given their own global[filename] object.

- /scripts which load and are executed.

