"use strict";
var path = require('path');
var exp = require('express');
var srv = exp();
srv.port = process.env.PORT || 1234;
srv.use(exp.static('pub'));
srv.get('/', function (req, res) { return res.sendFile(path.join(__dirname, '../pub/index.html')); });
srv.listen(srv.port, function () { return console.log(">>> server.js listening on port " + srv.port + "..."); });
