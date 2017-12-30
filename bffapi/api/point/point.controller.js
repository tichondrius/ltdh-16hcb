const pointService = require('./point.service');
const infoService = require('../info/info.service');  
const carService = require('../car/car.service'); 
const Validador = require('../ultils/validator');
const mongoose = require('mongoose');
const { CAR_STATUS, POINT_STATUS } = require('../ultils/enums');

const index = (req, res) => {
  const querys = {};
  const { query: { status} } = req;
  if (status) {
    querys.status = status;
  }
  pointService.getList(querys).then(points => res.json(points))
  .catch(error => {
     console.log('Unexpected error', error);
     res.status(400).send('Unexpected error');
  })   
}


const updateStatus = (req, res) => {
  const validator = new Validador(req, res);
  validator.requiredAll(['pointId', 'status'])
    .validValue('status', [POINT_STATUS.ISTRANSFERING, POINT_STATUS.COMPLETE]);
  const errorValidator = validator.getErrors();
  if (errorValidator.length) {
    res.status(400).json({
      errors: errorValidator,
    });
    return;
  }
  const { pointId } = req.params;
  const { status } = req.body;
  
  carService.getByUsername(req.auth.username).then(car => {
    const tasks = [
    pointService.updateData(pointId, {
        status: status,
      }),
    ];
    if (status === POINT_STATUS.COMPLETE) {
      tasks.push(carService.updateData(car._id, {
        status: CAR_STATUS.FREE,
      }));
    }
    Promise.all(tasks).then(results => {
      res.json(results);
      pointService.socketEmitPointUpdated(pointId);
      if (results.length === 2) {
        carService.socketEmitCarUpdated(car._id);
      }
    });
  }).catch(error => {
    console.log('error', error);
    res.status(400).json({
      errors: ['Unexpected error']
    });
  });
}

const carAccept = (req, res) => {
  const validator = new Validador(req, res);
  validator.required('pointId');
  const errorValidator = validator.getErrors();
  if (errorValidator.length) {
    res.status(400).json({
      errors: errorValidator,
    });
    return;
  }
  const { pointId } = req.params;
  const auth = req.auth;
  carService.getByUsername(auth.username)
    .then(car => {
      Promise.all([
        carService.updateData(car._id, {
          status: CAR_STATUS.BUSY,
        }),
        pointService.updateData(pointId, {
          status: POINT_STATUS.INCOMING,
          car: car._id,
        }),
      ]).then(results => {
        res.json(results);
        pointService.socketEmitPointUpdated(pointId);
        carService.socketEmitCarUpdated(car._id);
      }).catch(error => {
        console.log(error);
        res.status(400).json({
          errors: ['Unexpected error']
        });
      })
    });
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
    res.json(results[0]);
    infoService.socketEmitInfoUpdated(info);
    pointService.socketEmitPointAdded(pointId);
    pointService.socketEmitSendRequest(pointId);
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
  carAccept,
  updateStatus,
};

module.exports = pointController;
    