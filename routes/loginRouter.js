const router = require('express').Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.getLogin);

module.exports = router;
