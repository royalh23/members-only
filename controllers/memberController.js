const asyncHandler = require('express-async-handler');
const validateMemberPasscode = require('../middlewares/validateMemberPasscode');
const { validationResult } = require('express-validator');
const db = require('../configs/db/queries');

const memberPageGet = (req, res) => {
  res.render('member', { title: 'Member passcode', user: req.user });
};

const memberPagePost = [
  validateMemberPasscode,
  asyncHandler(async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).render('member', {
        title: 'Member passcode',
        errors: result.array(),
        user: req.user,
      });
    }

    await db.updateToMember(req.user.id);
    res.redirect('/');
  }),
];

module.exports = { memberPageGet, memberPagePost };
