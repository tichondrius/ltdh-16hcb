const { Cars } = require('../../collections');


function getList() {
  return new Promise((resolve, reject) => {
    Cars.find({}, (error, cars) => {
      if (error) {
        reject(error);
      } else resolve(cars);
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

const carService = {
  insertCar,
  isExistsUsername,
  authCar,
  getList,
};
  
module.exports = carService;
    