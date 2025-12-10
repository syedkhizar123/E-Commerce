
const express = require("express")
const router = express.Router()
const { placeOrder , getUserOrders , getAllOrders} = require("../controllers/orderController")
const { authMiddleware } = require("../Middlewares/authMiddleware")

router.post("/place" , authMiddleware , placeOrder)
router.get("/myorders" , authMiddleware , getUserOrders)
router.get("/all" , getAllOrders)

module.exports = router