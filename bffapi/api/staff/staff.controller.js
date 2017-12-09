const staffSerivce = require('./staff.service');
const Validator = require('../ultils/validator');

const index = (req, res) => {
  staffSerivce.getList().then(staffs => {
    res.json(staffs);
  }).catch(error => {
     res.status(400).send('Unexpected error');
  })
}

const create = (req, res) => {
  const validator = new Validator(req, res);
  validator.required('username')
           .required('password')
           .required('name')
           .validStringLength('username', 6)
           .validStringLength('password', 6)
           .validStringLength('name', 10)
  const errorValidator = validator.getErrors();
  if (errorValidator.length > 0) {
    res.status(400).json({
      errors: errorValidator,
    });
  } else {
    const { username, password, name } = req.body;
    // Check exist username
    staffSerivce.isExistsUsername(req.body.username).then(isExist => {
      if (isExist === true) {
        res.status(400).json({
          errors: ['Username is exist on system']
        });
      }
      else {
        staffSerivce.insertStaff(username, password, name)
          .then(newStaff => {
            res.json(newStaff);
          }).catch(error => {
            console.log('Unexpected error', error);
            res.status(400).send('Unexpected error');
          });
      }
    })  
  }
}

const staffController = {
  index,
  create,
};
  
module.exports = staffController;
    