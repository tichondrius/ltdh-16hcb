const { Cars } = require('../../collections');

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
};
  
module.exports = carService;
    