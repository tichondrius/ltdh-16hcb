const jwt = require('./api/ultils/jwt');
const userService = require('./servicies/userService'); 
module.exports = function(io) {
  io.on('connection', function (socket) {
    console.log(`socket ${socket.id} connect first`);

    //Listen socket connect
    socket.on('auth.user.login', function(token){
      if (token) {
        console.log(`received connection from ${socket.id} with token: ${token}`);
        socket.emit('something.server.want.to.send', 'message'); // Gửi socket đi
        jwt.verifyToken(token).then(({ username, type }) => {
          userService.addUsers({
            username,
            type,
            socketId: socket.id,
          })
        }).catch(error => {
          console.log('sign token error', error);
        })
      }
    });
    socket.on('auth.user.logout', function() {
      console.log(`received logout disconnection from ${socket.id}`);
      userService.removeUsersBySocketId(socket.id);
    })

    socket.on('disconnect', function() {
      console.log(`received (close tab or something) disconnection from ${socket.id}`);
       userService.removeUsersBySocketId(socket.id);
    })
  });
};

