const asyncHandler = require('express-async-handler');
const db = require('../configs/db/queries');
const validateMessageData = require('../middlewares/validateMessageData');
const { validationResult } = require('express-validator');

const getMessages = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessagesWithUser();
  res.render('messages', { title: 'Messages', user: req.user, messages });
});

const addMessageGet = (req, res) => {
  res.render('new-message', { title: 'New message', user: req.user });
};

const addMessagePost = [
  validateMessageData,
  asyncHandler(async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).render('new-message', {
        title: 'New message',
        errors: result.array(),
        user: req.user,
      });
    }

    await db.addMessage(req.body.title, req.body.text, req.user.id);
    res.redirect('/');
  }),
];

const deleteMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  await db.deleteMessageById(messageId);
  res.redirect('/');
});

module.exports = {
  getMessages,
  addMessageGet,
  addMessagePost,
  deleteMessage,
};
