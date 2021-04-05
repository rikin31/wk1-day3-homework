const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', function(req, res) {
    res.render('index', { title: 'Food blog'});
});

module.exports = router;