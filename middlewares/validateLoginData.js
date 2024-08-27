const { body } = require('express-validator');

module.exports = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Email address cannot be empty')
    .isEmail()
    .withMessage('Email address must be valid'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 3 })
    .withMessage('Password must be minimum 3 characters'),
];
