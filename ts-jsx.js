/**
 * Created by shearerbeard on 5/23/15.
 */

var reactTools = require('react-tools');
var escapeStringRegexp = require('escape-string-regexp');
var identifier = escapeStringRegexp("React.jsx");

var replace = function(match, jsx) {

    var reactToolsOptions = {harmony: true};

    try {
        var reactCode = reactTools.transform(jsx, reactToolsOptions);
    }
    catch (ex) {
        console.error('Problem transforming the following:\n' + jsx + '\n\n' + ex);
        return match;
    }
    return '(' + reactCode + ')'
};

exports.translate = function(load) {
    return load.source
        .replace(new RegExp(identifier + '\\(\\s*?`([^`\\\\]*(\\\\.[^`\\\\]*)*)`\\s*?\\)', 'gm'), replace) // using template strings
        .replace(new RegExp(identifier + '\\(\\/\\*((.|[\\r\\n])*?)\\*\\/\\)', 'gm'), replace) // using multiline comments
        .replace(/\/\*jsx\*\/((.|[\r\n])*?)\/\*jsx\*\//gm, replace); // using jsx comments
};
