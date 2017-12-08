const mongoose = require('mongoose');
const Schema = mongoose.Schema;

   
var pointModel = new Schema({
  info: { type: Schema.Types.ObjectId, ref: 'Point' },
  location : { type: Object },
  real_address: { type: String },
});    
     
module.exports = mongoose.model('Point', pointModel);

