const { body } = require('express-validator');
require('dotenv').config();

module.exports = [
  body('adminPasscode')
    .trim()
    .notEmpty()
    .withMessage('Admin passcode cannot be empty')
    .equals(process.env.ADMIN_PASSCODE)
    .withMessage('Wrong passcode'),
];
