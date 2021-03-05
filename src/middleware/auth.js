const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.cookies;

  if (!authorization) {
    return res.status(401).json({
      status: 401,
      message: 'No authorized',
    });
  }

  jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: 401,
        message: 'Invalid token',
      });
    }

    req.userId = decoded.id;
    return next();
  });
};
