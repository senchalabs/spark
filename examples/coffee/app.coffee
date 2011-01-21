# port from node example app
http = require('http')

module.exports = http.createServer (req, res) ->
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(this.env.name)
