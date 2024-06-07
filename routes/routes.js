const express= require('express')
const product = require('../controllers/productControllers')
const router =new express.Router()

router.get('/all-Products',product.getAllProducts)


module.exports = router