const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();


router.get('/add-product', (req, res, next) =>{
    console.log('In another the middware!');
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
});

router.post('/add-product', (req, res, next) =>{
    console.log('/product controller');
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;