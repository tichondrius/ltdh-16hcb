/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/cars', require('./api/car'));
  app.use('/api/infos', require('./api/info'));
  app.use('/api/points', require('./api/point'));
  app.use('/api/staffs', require('./api/staff'));
  app.use('/api/transportations', require('./api/transportation'));
};