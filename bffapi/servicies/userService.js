let listUsers = [];


const addUsers = (user) => {
  listUsers.push(user);
}

const removeUsersBySocketId = (socketId) => {
  listUsers = listUsers.filter(user => user.socketId !== socketId);
}

const removeUsersByUsername = (username) => {
  listUsers = listUsers.filter(user => user.username !== username);
}


const getSocketIdByUsername = (username) => {
  return listUsers.filter(user => user.username === username)
    .map(userFilterd => userFilterd.socketId);
} 

const getSocketIdByType = (type) => {
  return listUsers.filter(user => user.type === type)
    .map(userFilterd => userFilterd.socketId);
} 

const getSocketIdByTypes = (types) => {
  return listUsers.filter(user => types.indexOf(user.type) !== -1);
}

const getListUsers = () => listUsers;

module.exports = {
  addUsers,
  removeUsersBySocketId,
  removeUsersByUsername,
  getSocketIdByType,
  getSocketIdByTypes,
  getSocketIdByUsername,
  getListUsers,
}