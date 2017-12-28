const { Points } = require('../../collections');
const userService = require('../../servicies/userService');
const enums = require('../ultils/enums');

const getList = (query = {}) => {
  return new Promise((resolve, reject) => {
    Points.find(query).populate([
      {
        path: 'info',
      },
      {
        path: 'car',
      }
    ]).exec((error, points)=> {
      if (error) {
        reject(error);
      } else resolve(points);
    })
  });
}


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
  return new Promise((resolve, reject) => {
    Points.findById(pointId).populate([{
      path: 'info'
    }, {
      path: 'car'
    }]).exec((error, point) => {
      if (error) return reject(error);
      return resolve(point);
    });
  });
}


const socketEmitPointUpdated = (pointId) => {
  getById(pointId)
    .then(point => {
      const users = userService
        .getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
      users.forEach((user) => {
        global.io.sockets.sockets[user.socketId]
          .emit(enums.SOCKET_METHOD.SERVER_POINT_UPDATED, point);
      });
    }).catch(error => {
      console.log('error', error);
    }) 
}
const socketEmitPointAdded = (newPoint) => {
  const users = userService
    .getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
  users.forEach((user) => {
    global.io.sockets.socket[user.socketId]
      .emit(enums.SOCKET_METHOD.SERVER_POINT_ADDED, newPoint);
  });
}  



const pointService = {
  insertPoint,
  socketEmitPointAdded,
  socketEmitPointUpdated,
  getList,
};
  
module.exports = pointService;