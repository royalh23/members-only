const getLogin = (req, res) => {
  res.render('login', { title: 'Log in' });
};

module.exports = { getLogin };
