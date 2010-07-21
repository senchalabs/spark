
/**
 * Module dependencies.
 */

var sys = require('sys'),
    http = require('http');

// Based on the current env name require / mixin the
// additional file-based configuration. Try using
// --env production

var conf = require('./config/' + process.sparkEnv.name);
for (var key in conf) {
    process.sparkEnv[key] = conf[key];
}

sys.log('loading config file "config/' + process.sparkEnv.name + '.js"');

module.exports = http.createServer(function(req, res, next){
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end(sys.inspect(process.sparkEnv));
});