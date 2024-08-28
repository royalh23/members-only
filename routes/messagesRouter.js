const router = require('express').Router();
const messagesController = require('../controllers/messagesController');
const isAdmin = require('../middlewares/isAdmin');

router.get('/:messageId/delete', isAdmin, messagesController.deleteMessage);
router.get('/new-message', messagesController.addMessageGet);
router.post('/new-message', messagesController.addMessagePost);
router.get('/', messagesController.getMessages);

module.exports = router;
