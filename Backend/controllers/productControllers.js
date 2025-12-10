const Product = require('../models/productModel');

const getProducts = async (req , res) => {
    try {
        const products = await Product.find().sort({ _id: -1 })
        return res.status(200).json({message: "Products fetched successfully" , products})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const addProduct = async (req , res ) => {
    try {
        const { Images , ProductName , ProductDescription , Price , Category , SubCategory , Sizes , id} = req.body
        if( !Images || !ProductName || !ProductDescription || !Price || !Category || !SubCategory || !Sizes || !id){
            return res.status(400).json({message: "All fields are required."})
        }
        const newProduct = await Product.create({
            img: Images,
            name: ProductName,
            description: ProductDescription,
            price: Price,
            category: Category,
            subCategory: SubCategory,
            sizes: Sizes,
            id: id
        })

        return res.status(200).json({message: "Product added" , newProduct})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const removeProduct = async (req , res) => {
    try {
        const {id} = req.body
        if(!id){
            return res.status(400).json({message: "ID is required"})
        }
        const removedItem = await Product.findOneAndDelete({id: id})
        return res.status(200).json({message: "Product Deleted" , removedProduct: removedItem , id})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = { getProducts , addProduct , removeProduct };