var express = require('express');
var router = express.Router();

/* GET Tim page */
router.get('/', (req, res, next) => {
  res.render('tim', {title: 'About Tim'});
});

module.exports = router;