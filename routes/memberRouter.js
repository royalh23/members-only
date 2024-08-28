const router = require('express').Router();
const memberController = require('../controllers/memberController');

router.get('/', memberController.memberPageGet);
router.post('/', memberController.memberPagePost);

module.exports = router;
