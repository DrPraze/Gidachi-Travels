const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});

module.exports = router;