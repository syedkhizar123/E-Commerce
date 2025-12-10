
const User = require("../models/userModel");

const getUserCart = async (req, res) => {
    try {
        const user = req.user
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        return res.status(200).json({ cart: user.cart })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const addToCart = async (req, res) => {
    try {
        const { product, size } = req.body
        const user = req.user
        if (!user) {
            return res.status(400).json({ message: "Not Logged In" })
        }
        if (!product || !size) {
            return res.status(400).json({ message: "Product and size are required" })
        }

        const userCart = user.cart

        const existingItem = userCart.find(item => item.id.toString() === product.id.toString() && item.size === size)
        if (existingItem) {
            existingItem.quantity += 1
            res.status(200).json("The item exists")
        }

        else {
            userCart.push({
                ...product,
                quantity: 1,
                size: size
            })
        }

        user.markModified("cart")
        await user.save()
        return res.status(200).json({ message: "Product added to cart successfully", cart: user.cart })


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const removeFromCart = async (req ,res) => {
    try {
        
        const { id , size } = req.body
        const user = req.user

        if(!id || !size){
            return res.status(400).json({message: "Product id and size are required"})
        }

        const userCart = user.cart
        const updatedCart = userCart.filter(item => !(item.id.toString() === id.toString() && item.size === size))

        user.cart = updatedCart
        user.markModified("cart")
        await user.save()
        return res.status(200).json({message: "Product removed from cart successfully", cart: user.cart})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const clearCart = async (req , res) => {
    try {
        const user = req.user
        user.cart = []
        user.markModified("cart")
        await user.save()

        return res.status(200).json({message: "Cart Cleared"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = { getUserCart, addToCart , removeFromCart , clearCart};