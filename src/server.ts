const path = require('path');

const accountSid = process.env.SID;
const authToken = process.env.AUTH;

const twilio = require('twilio')(accountSid, authToken);

const bodyParser = require('body-parser');

const exp = require('express');
const srv = exp();

srv.port = process.env.PORT || 1234;

srv.use(bodyParser.json());
srv.use(exp.static('pub'));

srv.get('/', (req: any, res: any) => res.sendFile(path.join(__dirname, '../pub/index.html')));

srv.post('/send-text', (req: any, res: any) => {
  const from = process.env.FROM;
  const to = (req.body && req.body.phoneNumber) || '';

  twilio.messages
    .create({
      body: `🐔
      🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔
      🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔
      🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔

      Why did the chicken cross the road?..
      

      
      
    ..To eat the beans!

    🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔
    🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔
    🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔
    🐔`,
      from,
      to
    })
    .then(() => res.status(200).send())
});

srv.listen(srv.port);