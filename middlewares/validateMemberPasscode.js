const { body } = require('express-validator');

module.exports = [
  body('memberPasscode')
    .trim()
    .notEmpty()
    .withMessage('Member passcode cannot be empty')
    .equals('member123')
    .withMessage('Wrong passcode'),
];
