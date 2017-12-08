const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var transportationModel = new Schema({
    point: { type: Schema.Types.ObjectId, ref: 'Point' },
    car: { type: Schema.Types.ObjectId, ref: 'Car' },
    status: { type: Number },
});

module.exports = mongoose.model('Transportation', transportationModel);
