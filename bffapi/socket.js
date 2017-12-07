module.exports = function(io) {
  io.on('connection', function (socket) {
    socket.emit('someFunction', { hello: 'world' }); // Gửi socket đi
    socket.on('receivedFunction', function (data) {    // Lắng nghe socket
      console.log(data);
    });
  });
};

