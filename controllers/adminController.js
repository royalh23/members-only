const asyncHandler = require('express-async-handler');
const validateAdminPasscode = require('../middlewares/validateAdminPasscode');
const { validationResult } = require('express-validator');
const db = require('../configs/db/queries');

const adminPageGet = (req, res) => {
  res.render('admin', { title: 'Admin passcode', user: req.user });
};

const adminPagePost = [
  validateAdminPasscode,
  asyncHandler(async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).render('admin', {
        title: 'Admin passcode',
        errors: result.array(),
        user: req.user,
      });
    }

    await db.updateToAdmin(req.user.id);
    res.redirect('/');
  }),
];

module.exports = { adminPageGet, adminPagePost };
