const { Staffs } = require('../../collections');


const getList = (username) => {
  return new Promise((resolve, reject) => {
    Staffs.find({}, (error, users) => {
      if (error) {
        reject(error)
      }
      else resolve(users);
    });
  });
}

const isExistsUsername = (username) => {
  return new Promise((resolve, reject) => {
    Staffs.find({ username: username }, (error, users) => {
      if (Array.isArray(users) && users.length > 0) {
        resolve(true);
      }
      resolve(false);
    });
  });
}

const authStaff = (username, password) => {
   return new Promise((resolve, reject) => {
    Staffs.find({ username: username, password: password }, (error, users) => {
      if (error) {
        reject(error);
      }
      else if (Array.isArray(users) && users.length > 0) {
        resolve(users[0]);
      } else resolve(false);
    });
  });
}
const insertStaff = (username, password, name) => {
  return new Promise((resolve, reject) => {
    const staff = new Staffs({
      username,
      password,
      name,
    });
    staff.save((error, newStaff) => {
      if (error) {
        reject(error)
      } else resolve(newStaff);
    });
  });
} 

const staffService = {
  insertStaff,
  isExistsUsername,
  getList,
  authStaff
};
  
module.exports = staffService;