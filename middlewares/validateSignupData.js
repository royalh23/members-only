const { body } = require('express-validator');
const db = require('../configs/db/queries');

module.exports = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name cannot be empty')
    .isAlpha()
    .withMessage('First name must only contain alphabet letters'),
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name cannot be empty')
    .isAlpha()
    .withMessage('Last name must only contain alphabet letters'),
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Email address cannot be empty')
    .isEmail()
    .withMessage('Email address must be valid')
    .custom(async (value) => {
      const user = await db.getUserByEmail(value);
      if (user) throw new Error('Email is already in use');
    }),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 3 })
    .withMessage('Password must be minimum 3 characters'),
  body('confirmPassword')
    .trim()
    .notEmpty()
    .withMessage('Confirmation password cannot be empty')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('Passwords do not match'),
];
