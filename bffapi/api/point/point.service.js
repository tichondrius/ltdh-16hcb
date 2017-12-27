const { Points } = require('../../collections');
const { io } = require('../../server');
const userService = require('../../servicies/userService');
const enums = require('../ultils/enums');

const insertPoint = (id, info, location, real_address) => {
  return new Promise((resolve, reject) => {
    const newPoint = new Points({
      _id: id,
      info,
      location,
      real_address,
    });
    newPoint.save((error, point) => {
      if (error) reject(error);
      else resolve(point);
    })
  });
}

const getById = (pointId) => {
  Points.findById(pointId, (error, point) => {
    if (error) return Promise.reject(error);
    return Promise.resolve(info);
  });
}


const socketEmitPointUpdated = (pointId) => {
  getById(pointId)
    .then(point => {
      const users = userService.getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
      users.forEach((user) => {
        io.sockets.sockets(user.socketId)
          .emit(enums.SOCKET_METHOD.SERVER_POINT_UPDATED, point);
      });
    }).catch(error => {
      console.log('error', error);
    }) 
}
const socketEmitPointAdded = (newPoint) => {
  const users = userService.getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
  users.forEach((user) => {
    io.sockets.sockets(user.socketId)
      .emit(enums.SOCKET_METHOD.SERVER_POINT_ADDED, newPoint);
  });
}  



const pointService = {
  insertPoint,
  socketEmitPointAdded,
  socketEmitPointUpdated,
};
  
module.exports = pointService;