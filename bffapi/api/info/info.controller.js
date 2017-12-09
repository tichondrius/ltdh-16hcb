const infoService = require('./info.service');
const Validator = require('../ultils/validator');
const { TRANSPORTATION_TYPE } = require('../ultils/enums');


const create = (req, res) => {
  const validator = new Validator(req, res);
  validator.requiredAll([
    'phone', 'name', 'address', 'type'
  ]).validStringLength('phone', 10)
    .validStringLength('name', 10)
    .validStringLength('address', 10)
    .validValue('type', [TRANSPORTATION_TYPE.NORMAL, TRANSPORTATION_TYPE.PREMIUM]);

  const errorValidator = validator.getErrors();
  if (errorValidator.length > 0) {
    res.status(400).json({
      errors: errorValidator,
    });
  } else {
    const { phone, name, address, type } = req.body;
    infoService.create(phone, name, address, type)
      .then((infoNew) => res.json(infoNew))
      .catch(error => {
        console.log('Unexpected error', error);
        res.status(400).send('Unexpected error');
      })
  }
}

const index = (req, res) => {
  infoService.getList().then(infos => res.json(infos))
  .catch(error => {
     console.log('Unexpected error', error);
     res.status(400).send('Unexpected error');
  })   
}
const infoController = {
  index,
  create,
};



module.exports = infoController;
  