'use strict';

var path = require('path');
var fs = require('fs');

var mergeTrees = require('broccoli-merge-trees');
var compileSass = require('broccoli-compass');

function EmberCLICompass(project) {
    this.project = project;
    this.name = 'Ember CLI Compass';
}

EmberCLICompass.prototype.included = function included(app) {
    this.app = app;
    this.options = this.app.options.compass;
};

EmberCLICompass.prototype.postprocessTree = function(type, tree) {
    // if (type === 'all' || type === 'styles') {
    //     tree = compileSass(tree, this.options);
    // }

    // return tree;

    return mergeTrees([
        tree,
        compileSass(tree, this.options)
    ]);
};

EmberCLICompass.prototype.treeFor = function treeFor() {};


// function unwatchedTree(dir) {
//     return {
//         read: function() { return dir; },
//         cleanup: function() {}
//     };
// };

// EmberCLICompass.prototype.treeFor = function treeFor(name) {
//     var treePath = path.join('node_modules', 'ember-cli-super-number', name + '-addon');

//     if (fs.existsSync(treePath)) {
//         return unwatchedTree(treePath);
//     }

//     return '';
// };

// EmberCLICompass.prototype.included = function included(app) {
//     this.app = app;

//     this.app.import('vendor/ember-cli.super-number/styles/style.css');
// };


module.exports = EmberCLICompass;
