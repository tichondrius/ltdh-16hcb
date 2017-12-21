const { Infos } = require('../../collections');
const { INFO_STATUS } = require('../ultils/enums');


const getList = (query = {}) => {
  return new Promise((resolve, reject) => {
    Infos.find(query, (error, infos) => {
      if (error) {
        reject(error);
      } else resolve(infos);
    })
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
};
  
module.exports = infoService;