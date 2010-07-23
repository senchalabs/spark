# Spark

Spark is a command-line tool used to start up node server instances written by [Tj Holowaychuk](http://github.com/visionmedia) and [Tim Caswell](http://github.com/creationix).  It's part of the [Connect][http://github.com/senchalabs/connect] framework, however can be used standalone with _any_ node server.

## Features

Spark provides the following options when starting a server.

 - Port/Host to listen on
 - SSL hosting with specified key/certificate
 - Automatic child process spawning for multi-process node servers that share a common port.
 - User/Group to drop to after binding (if run as root)
 - Environment modes (development/testing/production)
 - Modify the node require paths
 - Can load any of these configs from from a file (optionally grouped by env)
 - Can change the working directory before running the app
 - `--comment` option to label processes in system tools like `ps` or `htop`
 - Pass arbitrary code or environment variables to the app

## Making an app spark compatible

Any node server can be used with spark.  All you need to do it create a file called `app.js` that exports the instance of `http.Server` or `net.Server`.

A hello-world example would look like this:

    module.exports = require('http').createServer(function (req, res) {
        res.writeHead(200, {"Content-Type":"text-plain"});
        res.end("Hello World");
    });

And then to run it you simply go to the folder containing the `app.js` and type:

    spark

The output you'll see will be:

    Spark server(34037) listening on http://*:3000 in development mode

Where `34037` is the process id. If you want 4 processes to balance the requests across, no problem.

    spark -n 4

And you'll see:

    Spark server(34049) listening on http://*:3000 in development mode
    Spark server(34050) listening on http://*:3000 in development mode
    Spark server(34052) listening on http://*:3000 in development mode
    Spark server(34051) listening on http://*:3000 in development mode

