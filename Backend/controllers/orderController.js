const Order = require('../models/orders.js');

const placeOrder = async (req , res) => {
    try {
        const { products , paymentMethod} = req.body
        if(!products || !paymentMethod){
            return res.status(400).json({message: "Products and payment method are required"})
        }
        
        const newOrder = await Order.create({
            userId: req.user._id,
            products,
            paymentMethod,
            DeliveryInfo: req.body.DeliveryInfo
        })

        return res.status(200).json({message: "Order Placed Successfully"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getUserOrders = async (req , res) => {
    try {
        const userOrders = await Order.find({userId: req.user._id}).sort({orderDate: -1})
        return res.status(200).json({orders: userOrders})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getAllOrders = async (req , res) => {
    try {
        const allOrders = await Order.find().sort({ _id: -1})
        return res.status(200).json({message: "Fetched Successfully" , allOrders})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = { placeOrder , getUserOrders , getAllOrders};