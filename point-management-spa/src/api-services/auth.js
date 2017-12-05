export const postLogin = (username, password) => ({
  method: 'POST',
  url: 'token',
  data: {
    username,
    password,
  }
});