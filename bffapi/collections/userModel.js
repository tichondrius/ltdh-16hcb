const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userModel = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String }
});

module.exports = mongoose.model('User', userModel);                                            
