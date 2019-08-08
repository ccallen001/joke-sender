"use strict";
var path = require('path');
var accountSid = process.env.SID;
var authToken = process.env.AUTH;
var twilio = require('twilio')(accountSid, authToken);
var bodyParser = require('body-parser');
var exp = require('express');
var srv = exp();
srv.port = process.env.PORT || 1234;
srv.use(bodyParser.json());
srv.use(exp.static('pub'));
srv.get('/', function (req, res) { return res.sendFile(path.join(__dirname, '../pub/index.html')); });
srv.post('/send-text', function (req, res) {
    var from = process.env.FROM;
    var to = (req.body && req.body.phoneNumber) || '';
    twilio.messages
        .create({
        body: "\uD83D\uDC14\n      \uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\n      \uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\n      \uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\n\n      Why did the chicken cross the road?..\n      \n\n      \n      \n    ..To eat the beans!\n\n    \uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\n    \uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\n    \uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\uD83D\uDC14\n    \uD83D\uDC14",
        from: from,
        to: to
    })
        .then(function () { return res.status(200).send(); });
});
srv.listen(srv.port);
