const pointService = require('./point.service');
const infoService = require('../info/info.service');  
const Validador = require('../ultils/validator');
const mongoose = require('mongoose');

const index = (req, res) => {

}
const post = (req, res) => {
  const validator = new Validador(req, res);
  validator.requiredAll([
    'info',
    'location',
    'location.lat',
    'location.lng',
    'real_address',
  ]).validNumber('location.lat')
  .validNumber('location.lng');
  const errorValidator = validator.getErrors();
  if (errorValidator.length > 0) {
    res.status(400).json({
      errors: errorValidator,
    });
    return;
  }
  const { info, location, real_address } = req.body;
  const pointId = mongoose.Types.ObjectId();

  Promise.all([
    pointService.insertPoint(pointId, info, location, real_address),
    infoService.assignPointToInfo(info, pointId)
  ]).then(results => {
    infoService.socketEmitInfoUpdated(info);
    pointService.socketEmitPointUpdated(pointId);
    res.json(results[0]);
  }).catch(error => {
    console.log('error', error);
    res.status(400).json({
      errors: ['Unexpeced error'],
    });
  })

}
const pointController = {
  index,
  post,
};

module.exports = pointController;
    