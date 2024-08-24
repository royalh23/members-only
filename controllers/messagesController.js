const asyncHandler = require('express-async-handler');
const db = require('../configs/db/queries');

const getMessages = asyncHandler((req, res) => {
  res.render('messages', { title: 'Messages', user: req.user });
});

module.exports = { getMessages };
