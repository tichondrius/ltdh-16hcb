const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var carModel = new Schema({
  carNumber: { type: String  },
  username : { type: String },
  password: { type: String },
  type: { type: String },
  drivenName: { type: String },
  personCode: { type: String },
});

module.exports = mongoose.model('Car', carModel);
