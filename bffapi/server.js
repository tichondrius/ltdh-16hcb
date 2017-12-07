const app = require('./app');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('./socket')(io);

// Using by require this file `require('server').io` or `global.io` on controller or service to emit
global.io = io;
exports.io = io;
const PORT = process.env.PORT || 9009;

server.listen(PORT, () => {
  console.log(`The server is listening in port ${PORT}`);
});

