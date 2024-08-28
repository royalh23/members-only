const { body } = require('express-validator');

module.exports = [
  body('title').trim().notEmpty().withMessage('Title cannot be empty'),
  body('text').trim().notEmpty().withMessage('Text cannot be empty'),
];
