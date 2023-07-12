var express = require('express');
var router = express.Router();

/* GET Laurie page */
router.get('/', (req, res, next) => {
  res.render('laurie', {title: 'About Laurie'});
});

module.exports = router;