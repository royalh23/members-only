const getSignup = (req, res) => {
  res.render('signup', { title: 'Sign up' });
};

module.exports = { getSignup };
