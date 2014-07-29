ember-cli-compass
=================

Solution to this: http://stackoverflow.com/questions/24074351/how-to-generate-image-sprites-in-ember-cli-using-compass/24850127#24850127

I thought this would be solved by using an ember addon and postprocess hook, i published an addon, 

To install run: `npm install ember-cli-compass --save-dev` inside your project.

Configure in your `Brocfile.js`.

    /* global require, module */
    
    var EmberApp = require('ember-cli/lib/broccoli/ember-app');
    
    var app = new EmberApp({
        compass: {
            outputStyle: 'expanded',
            relativeAssets: false,
            sassDir: 'assets',
            imagesDir: 'images',
            cssDir: 'assets'
        }
    });
    
    module.exports = app.toTree();
