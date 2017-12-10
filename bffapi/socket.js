module.exports = function(io) {
  io.on('connection', function (socket) {
    console.log(`socket ${socket.id} connect first`);

    //Listen socket connect
    socket.on('auth.user.login', function(token){
      console.log(`received connection from ${socket.id} with token: ${token}`);
      socket.emit('something.server.want.to.send', 'message'); // Gửi socket đi
    });
    socket.on('auth.user.logout', function() {
      console.log(`received logout disconnection from ${socket.id}`);
    })

    socket.on('disconnect', function() {
      console.log(`received (close tab or something) disconnection from ${socket.id}`);
    })
  });
};

