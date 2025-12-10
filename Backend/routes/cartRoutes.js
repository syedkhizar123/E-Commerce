const express = require("express")
const router = express.Router()
const {  getUserCart, addToCart, removeFromCart , clearCart} = require("../controllers/cartControllers")
const { authMiddleware } = require("../Middlewares/authMiddleware")

router.get("/" , authMiddleware , getUserCart)
router.post("/add" , authMiddleware , addToCart)
router.post("/remove" , authMiddleware , removeFromCart)
router.post("/clear" , authMiddleware , clearCart)

module.exports = router