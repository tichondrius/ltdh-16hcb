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
};
  
module.exports = infoService;