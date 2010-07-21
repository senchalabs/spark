var http = require('http');

module.exports = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var secure = req.socket.secure;
    res.end('secure=' + secure + ', that is ' + (secure ? 'good' : 'bad'));
});
