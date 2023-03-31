var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/registrasi', userController.index);

router.post('/v1/registration', userController.registration1)
router.post('/v2/registration', userController.registration2)

module.exports = router;
