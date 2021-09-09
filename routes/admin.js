const path = require('path');

const express = require('express');

const producController = require('../controllers/product');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', producController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', producController.postAddProduct);

module.exports = router;
