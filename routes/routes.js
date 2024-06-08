const express= require('express')
const product = require('../controllers/productControllers')
const user = require('../controllers/userController')
const wishlist = require('../controllers/wishlistController')
const jwtMiddle = require('../Middlewares/jwtMiddleware')
const router =new express.Router()

router.get('/all-Products',product.getAllProducts)
router.get('/get-Product/:id',product.getProduct)
router.post('/register',user.userRegister)
router.post('/login',user.userLogin)
router.post('/addToWishlist',jwtMiddle,wishlist.addToWishList)

module.exports = router