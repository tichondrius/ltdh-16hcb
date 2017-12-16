const mongoose = require('mongoose');
const Schema = mongoose.Schema;

   
var pointModel = new Schema({
  info: { type: Schema.Types.ObjectId, ref: 'Point' },
  location : { type: Object },
  real_address: { type: String },
  car: { type: Schema.Types.ObjectId, ref: 'Car' },
  status: { type: String },
});    
     
module.exports = mongoose.model('Point', pointModel);

