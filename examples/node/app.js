// Yes, this is a vanilla node app
var http = require('http');

module.exports = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(this.env.name);
});