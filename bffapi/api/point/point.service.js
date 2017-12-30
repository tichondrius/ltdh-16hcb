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
      status: enums.POINT_STATUS.NOT_CAR_YET
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



const socketEmitSendRequest = (pointId) => {
 getById(pointId)
    .then(point => {
      const users = userService
        .getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.CAR_DRIVEN]);
      users.forEach((user) => {
        global.io.sockets.sockets[user.socketId]
          .emit(enums.SOCKET_METHOD.SERVER_SEND_POINT_REQUEST, point);
      });
    }).catch(error => {
      console.log('error', error);
    }) 
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
const updateData = (pointId, dataPoint) => {
  return new Promise((resolve, reject) => {
    Points.findById(pointId, (error, point) => {
      if (error) throw error;
      else return Promise.resolve(point);
    }).then(point => {
      Object.keys(dataPoint).forEach(key => {
        point[key] = dataPoint[key];
      })
      point.save((error) => {
        if (error) reject(error);
        else resolve(point);
      });
    });
  });
} 
const socketEmitPointAdded = (newPointId) => {
  getById(newPointId)
    .then(point => {
      const users = userService
        .getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
      users.forEach((user) => {
        global.io.sockets.sockets[user.socketId]
          .emit(enums.SOCKET_METHOD.SERVER_POINT_ADDED, point);
      });
    }).catch(error => {
      console.log('error', error);
    });
}  



const pointService = {
  insertPoint,
  socketEmitPointAdded,
  socketEmitPointUpdated,
  socketEmitSendRequest,
  getList,
  updateData,
};
  
module.exports = pointService;