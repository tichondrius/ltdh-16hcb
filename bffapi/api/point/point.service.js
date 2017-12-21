const { Points } = require('../../collections');

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

const pointService = {
  insertPoint
};
  
module.exports = pointService;