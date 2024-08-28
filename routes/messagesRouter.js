const router = require('express').Router();
const messagesController = require('../controllers/messagesController');

router.get('/new-message', messagesController.addMessageGet);
router.post('/new-message', messagesController.addMessagePost);
router.get('/', messagesController.getMessages);

module.exports = router;
