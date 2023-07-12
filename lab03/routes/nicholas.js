var express = require('express');
var router = express.Router();

/* GET Nicholas page */
router.get('/', (req, res, next) => {
  res.render('nicholas', {title: 'About Nicholas'});
});

module.exports = router;