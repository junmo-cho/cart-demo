const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductById } = require('../controller/productController');

router.get('/', getAllProducts);

router.get('/', getAllProductById);

module.exports = router;
