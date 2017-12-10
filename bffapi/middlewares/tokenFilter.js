const { verifyToken } = require('../api/ultils/jwt');

const tokenFilter = (req, res, next) => {
  var auth = req.headers["authorization"];
  if (auth && typeof auth === 'string') {
    const tokens = auth.split(' ');
    const [prefix, token] = tokens;
    if (prefix !== 'Bearer' || !token) {
       res.status(401).json({
          errors: ['Missing token'],
        })
    } else {
      verifyToken(token).then(payload => {
        const user = {
          username: payload.username,
          name: payload.name,
          type: payload.type,
        };
        req.auth = user;
        next();
      }).catch(error => {
        console.log('verfityToken error', error);
        res.status(401).json({
          errors: ['Missing token or token is not valid'],
        })
      })
    }
  } else {
    res.status(401).json({
      errors: ['Missing token'],
    })
  }
}

module.exports = tokenFilter;