var express = require('express');
var router = express.Router();

/* GET Amanda page */
router.get('/', (req, res, next) => {
  res.render('amanda', {title: 'About Amanda'});
});

module.exports = router;