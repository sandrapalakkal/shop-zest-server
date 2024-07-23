const express = require('express')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')

const router = new express.Router()

//get all products
router.get('/all-products', productController.getAllProductsController)

//get a single product
router.get('/:id/view-product', productController.getAProductController)

//register
router.post('/register', userController.registerController)

//login
router.post('/login', userController.loginController)

//addToWishlist
router.post('/addToWishlist', jwtMiddleware, wishlistController.addToWishlist)

//getwishlist
router.get('/get-wishlist', jwtMiddleware, wishlistController.getWishlist)

//remove wishlist
router.delete('/wishlist/:id/remove', jwtMiddleware, wishlistController.removeWishlistItem)

//addtocart
router.post('/addToCart', jwtMiddleware, cartController.addToCart)

//get cart
router.get('/get-cart', jwtMiddleware, cartController.getCart)

//remove cart item
router.delete('/cart/:id/remove',jwtMiddleware,cartController.removeCartItems)

//increment cart
router.get('/cart/:id/increment',jwtMiddleware,cartController.incrementCart)

//decrement cart
router.get('/cart/:id/decrement',jwtMiddleware,cartController.decrementCart)

//empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)

module.exports = router
