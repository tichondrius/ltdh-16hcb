const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var infoModel = new Schema({
  phone: { type: String },
  name: { type: String },
  address: { type: String },
  type: { type: String },
  status: { type: Number },
  point: { type: Schema.Types.ObjectId, ref: 'Point'},
});

module.exports = mongoose.model('Info', infoModel);     
