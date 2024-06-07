const express= require('express')
const product = require('../controllers/productControllers')
const user = require('../controllers/userController')
const router =new express.Router()

router.get('/all-Products',product.getAllProducts)
router.get('/get-Product/:id',product.getProduct)
router.post('/register',user.userRegister)
router.post('/login',user.userLogin)

module.exports = router