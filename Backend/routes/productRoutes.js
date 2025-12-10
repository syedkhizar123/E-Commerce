const express = require('express');
const router = express.Router();
const { getProducts , addProduct , removeProduct} = require('../controllers/productControllers.js');

router.get('/all', getProducts);
router.post('/add' , addProduct )
router.post('/remove' , removeProduct)

module.exports = router;