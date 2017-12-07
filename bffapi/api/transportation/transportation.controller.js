const transportationService = require('./transportation.service');
const transportationController = {
  index: (req, res) => {
    res.json([]);
  },
};
  
module.exports = transportationController;
    