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

const getListUsers = () => listUsers;



module.exports = {
  addUsers,
  removeUsersBySocketId,
  removeUsersByUsername,
  getSocketIdByType,
  getSocketIdByUsername,
  getListUsers,
}