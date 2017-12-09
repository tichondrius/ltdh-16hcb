const carSerivce = require('./car.service');
const Validator = require('../ultils/validator');
const { TRANSPORTATION_TYPE } = require('../ultils/enums');

const index = (req, res) => {
  carSerivce.getList().then(cars => {
    res.json(cars);
  }).catch(error => {
    console.log('Unexpected error', error);
    res.status(400).json({
      errors: ['Unexpeced error']
    })
  });
}

const create = (req, res) => {
  console.log(req.body);
  const validator = new Validator(req, res);
  validator.requiredAll([
    'carNumber',
    'username',
    'password',
    'type',
    'drivenName',
    'personCode',
  ]).validValue('type', [TRANSPORTATION_TYPE.NORMAL, TRANSPORTATION_TYPE.PREMIUM])
  .validStringLength('username', 6)
  .validStringLength('password', 6)
  .validStringLength('drivenName', 10)
  .validStringLength('carNumber', 6, 30);

  const errorsValidator = validator.getErrors();
  if (errorsValidator.length > 0) {
    res.status(400).json({
      errors: errorsValidator,
    })
    return;
  }
  // Check validator
    const {
    carNumber,
    username,
    password,
    type,
    drivenName,
    personCode,
  } = req.body;
 
  carSerivce.isExistsUsername(username).then(isExist => {
    if (isExist) {
      res.status(400).json({
        errors: ['Username is exists on system']
      });
    } else {
      carSerivce.insertCar(carNumber, username, password, type, drivenName, personCode)
        .then(newCar => res.json(newCar))
        .catch(error => {
          console.log('Unexpected error', error);
          res.status(400).json({
            errors: ['Unexpeced error']
          })
        })
    }
  });
}
const carController = {
  index,
  create,
};
  
module.exports = carController;
    