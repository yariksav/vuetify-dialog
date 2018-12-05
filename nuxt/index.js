/*
Nuxt.js module for vuetify-dialog
Usage:
    - Install vuetify-dialog package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'vuetify-dialog/nuxt'
            // Optionally passing options in module configuration
            ['vuetify-dialog/nuxt', { property: '$dialog' }]
        ],
        // Optionally passing options in module top level configuration
        wait: { property: '$dialog' }
    }
*/

const {resolve} = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
    const options = Object.assign({}, this.options.vuetifyDialog, moduleOptions);

    // Register plugin
    this.addPlugin({
        src: resolve(__dirname, 'plugin.template.js'),
        fileName: 'vuetify-dialog.js',
        options: options
    })
};

// required by nuxt
module.exports.meta = require('../package.json');
