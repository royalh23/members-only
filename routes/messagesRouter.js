const router = require('express').Router();
const messagesController = require('../controllers/messagesController');

router.get('/', messagesController.getMessages);

module.exports = router;
