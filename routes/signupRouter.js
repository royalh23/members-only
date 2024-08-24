const router = require('express').Router();
const signupController = require('../controllers/signupController');

router.get('/', signupController.getSignup);

module.exports = router;
