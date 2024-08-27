const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const validateSignupData = require('../middlewares/validateSignupData');
const db = require('../configs/db/queries');
const { validationResult } = require('express-validator');

const getSignup = (req, res) => {
  if (req.isAuthenticated()) return res.redirect('/');
  res.render('signup', { title: 'Sign up' });
};

const postSignup = [
  validateSignupData,
  asyncHandler(async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res
        .status(400)
        .render('signup', { title: 'Sign up', errors: result.array() });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await db.addUser(
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      hashedPassword,
    );
    res.redirect('/login');
  }),
];

module.exports = { getSignup, postSignup };
