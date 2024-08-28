const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).send(
      '<h1>You are prohibited to perform this action</h1>\
      <p><a href="/">Return home</a></p>',
    );
  }
};

module.exports = isAdmin;
