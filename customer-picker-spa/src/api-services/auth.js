export const postLogin = (username, password) => ({
  method: 'POST',
  url: 'auth/token',
  data: {
    username,
    password,
    type: 'customer_picker'
  }
});


export default {
  postLogin,
}