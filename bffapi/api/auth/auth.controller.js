const carService = require('../car/car.service');
const staffService = require('../staff/staff.service') 
const Validator = require('../ultils/validator');
const { signToken } = require('../ultils/jwt');
const { TRANSPORTATION_TYPE, TYPE_USER } = require('../ultils/enums');



const auth = (req, res) => {
  const validator = new Validator(req, res);
  validator.requiredAll([
    'username', 'password', 'type',
  ]).validValue('type',[
    TYPE_USER.TELEPHONLIST,
    TYPE_USER.CUSTOMER_PICKER,
    TYPE_USER.POINT_MANAGEMENT,
    ]);
  const errorsValidator = validator.getErrors();
  if (errorsValidator.length > 0) {
    res.json({
      errors: errorsValidator,
    });
    return;
  }
  const { username, password, type } = req.body;
  Promise.all([
    carService.authCar(username, password),
    staffService.authStaff(username, password),
  ]).then(authsResult => {
    const [authCar, authStaff] = authsResult;
    let payload;
    if (authCar !== false) {
      payload = {
        username: authCar.username,
        name: authCar.drivenName,
        type: TYPE_USER.CAR_DRIVEN,
      };
    } 
    if (authStaff !== false) {
      payload = {
        username: authStaff.username,
        name: authStaff.name,
        type: type,
      }
    }
    if (payload) {
       signToken(payload).then(token => {
        res.json({
          token,
        });
      }).catch(error => { throw new Error(error)});
    } else {
      res.status(400).json({
        errors: ['Username or password is wrong']
      });
    }
  }).catch(error => {
    console.log('Unexpected error', error);
    res.status(400).json({
      errors: ['Unexpeced error']
    });
  });
}

const authController = {
  auth,
};
  
module.exports = authController;
    