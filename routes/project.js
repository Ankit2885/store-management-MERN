const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/campaign')

router.post('/fetch-project', getAllProducts)
router.post('/get-project/:productId', getProduct)
router.post('/create-project', createProduct)
router.post('/update-project', updateProduct)
router.post('/delete-project', deleteProduct)

module.exports = router