var express = require('express');
const pagesController = require('./../controllers/pagesController')
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */
router.get('/', pagesController.index);
router.get('/detail', pagesController.detail);

module.exports = router;
