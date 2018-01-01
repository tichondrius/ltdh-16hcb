const { Infos } = require('../../collections');
const { INFO_STATUS } = require('../ultils/enums');
const userService = require('../../servicies/userService');
const enums = require('../ultils/enums');

const getList = (query = {}) => {
  return new Promise((resolve, reject) => {
    Infos.find(query).populate([
      {
        path: 'point',
      }
    ]).exec((error, infos)=> {
      if (error) {
        reject(error);
      } else resolve(infos);
    })
  });
}

const getById = (infoId) => {
  return new Promise((resolve, reject) => {
    Infos.findById(infoId).populate([{
      path: 'point'
    }]).exec((error, info) => {
      if (error) return reject(error);
      return resolve(info);
    });
  });
}


const socketEmitInfoUpdated = (infoId) => {
  getById(infoId)
    .then(newInfo => {
      const users = userService
        .getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
      users.forEach((user) => {
        global.io.sockets.sockets[user.socketId]
          .emit(enums.SOCKET_METHOD.SERVER_INFO_UPDATED, newInfo);
      });
    }).catch(error => {
      console.log('error', error);
    });
}
const socketEmitInfoAdded = (newInfoId) => {
    getById(newInfoId)
    .then(newInfo => {
      const users = userService
        .getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
      users.forEach((user) => {
        global.io.sockets.sockets[user.socketId]
          .emit(enums.SOCKET_METHOD.SERVER_INFO_ADDED, newInfo);
      });
    }).catch(error => {
      console.log('error', error);
    });
}  

const assignPointToInfo = (infoId, pointId) => {
  return new Promise((resolve, reject) => {
    Infos.findById(infoId, (err, info) => {
      if (err) throw err;
      else Promise.resolve(info);
    }).then((info) => {
      info.point = pointId;
      info.status = INFO_STATUS.CREATED_POINT;
      info.save((error, infoUpdated) => {
        if (error) throw err;
        else resolve(infoUpdated);
      })
    });
  });
}

const create = (phone, name, address, type) => {
  return new Promise((resolve, reject) => {
    const info = new Infos({
      phone,
      name,
      address,
      type,
      status: INFO_STATUS.NEW,
    });
    info.save((error, newInfo) => {
      if (error) {
        reject(error);
      } else resolve(newInfo);
    });
  });
}
const infoService = {
  create,
  getList,
  assignPointToInfo,
  socketEmitInfoAdded,
  socketEmitInfoUpdated,
};
  
module.exports = infoService;