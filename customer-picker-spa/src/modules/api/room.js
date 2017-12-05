import _rooms from './rooms.json'


export default {
    getRooms: (cb) => Object.assign(cb, _rooms),
    buyProducts: (payload, cb) => setTimeout(() => cb())
  }