const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var staffModel = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String }
});

module.exports = mongoose.model('Staff', staffModel);                                            
