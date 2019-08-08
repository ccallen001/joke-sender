const path = require('path');
const exp = require('express');
const srv = exp();

srv.port = process.env.PORT || 1234;

srv.use(exp.static('pub'));

srv.get('/', (req: any, res: any) => res.sendFile(path.join(__dirname, '../pub/index.html')));

srv.listen(srv.port, () => console.log(`>>> server.js listening on port ${srv.port}...`));