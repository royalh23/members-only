const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.adminPageGet);
router.post('/', adminController.adminPagePost);

module.exports = router;
