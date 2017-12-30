const { Cars } = require('../../collections');
const userService = require('../../servicies/userService');
const enums = require('../ultils/enums');

function getList() {
  return new Promise((resolve, reject) => {
    Cars.find({}, (error, cars) => {
      if (error) {
        reject(error);
      } else resolve(cars);
    });
  });
}

function getById (id) {
   return new Promise((resolve, reject) => {
    Cars.findById(id, (err, car) => {
      if (err) reject(err);
      else resolve(car);
    })
  });
}

function getByUsername (username) {
  return new Promise((resolve, reject) => {
    Cars.findOne({
      username: username,
    }, (err, car) => {
      if (err) reject(err);
      else resolve(car);
    })
  });
} 
function updateData(carId, dataCar) {
  return new Promise((resolve, reject) => {
    Cars.findById(carId, (error, car) => {
      if (error) throw error;
      else return Promise.resolve(car);
    }).then(car => {
      Object.keys(dataCar).forEach(key => {
        car[key] = dataCar[key];
      })
      car.save((error) => {
        if (error) reject(error);
        else resolve(car);
      });
    });
  });
} 

function authCar (username, password) {
   return new Promise((resolve, reject) => {
    Cars.find({ username: username, password: password }, (error, cars) => {
      if (Array.isArray(cars) && cars.length > 0) {
        resolve(cars[0]);
      }
      resolve(false);
    });
  });
} 
function isExistsUsername (username) {
  return new Promise((resolve, reject) => {
    Cars.find({ username: username }, (error, cars) => {
      if (Array.isArray(cars) && cars.length > 0) {
        resolve(true);
      }
      resolve(false);
    });
  });
}

function insertCar (carNumber, username, password, type, drivenName, personCode) {
  const car = new Cars({
    carNumber,
    username,
    password,
    type,
    drivenName,
    personCode
  });
  return new Promise((resolve, reject) => {
    car.save((error, newCar) => {
      if (error) {
        reject(error);
      }
      else resolve(newCar)
    })
  });
}

const socketEmitCarUpdated = (carId) => {
  getById(carId)
    .then(carUpdated => {
      const users = userService
        .getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
      users.forEach((user) => {
        global.io.sockets.sockets[user.socketId]
          .emit(enums.SOCKET_METHOD.SERVER_CAR_UPDATED, carUpdated);
      });
    }).catch(error => {
      console.log('error', error);
    });
}

const socketEmitCarAdded = (carId) => {
  getById(carId)
    .then(carUpdated => {
      const users = userService
        .getSocketIdByTypes([enums.TYPE_USER.CUSTOMER_PICKER, enums.TYPE_USER.TELEPHONLIST]);
      users.forEach((user) => {
        global.io.sockets.sockets[user.socketId]
          .emit(enums.SOCKET_METHOD.SERVER_CAR_ADDED, carUpdated);
      });
    }).catch(error => {
      console.log('error', error);
    });
}

const carService = {
  insertCar,
  isExistsUsername,
  authCar,
  getList,
  updateData,
  getByUsername,
  socketEmitCarAdded,
  socketEmitCarUpdated,
};
  
module.exports = carService;
    