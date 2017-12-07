const carSerivce = require('./car.service');

const carController = {
  index: (req, res) => {
    res.json([]);
  },
};
  
module.exports = carController;
    