'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './src/';
        this.sourceApp = this.source + 'app/';

        this.tsOutputPath = this.source + '/dist';
        this.allJavaScript = [this.source + '/dist/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typedefs/typings/';
        this.libraryTypeScriptDefinitions = './typedefs/typings/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
