const validateLoginData = require('../middlewares/validateLoginData');
const asyncHandler = require('express-async-handler');
const { validationResult } = require('express-validator');
const passport = require('passport');

const getLogin = (req, res) => {
  if (req.isAuthenticated()) return res.redirect('/');
  res.render('login', { title: 'Log in', authMessages: req.session.messages });
};

const postLogin = [
  validateLoginData,
  asyncHandler(async (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res
        .status(400)
        .render('login', { title: 'Log in', errors: result.array() });
    }

    next();
  }),
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true,
  }),
];

module.exports = { getLogin, postLogin };
