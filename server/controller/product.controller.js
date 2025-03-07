import product from "../models/ProductSchema.js"

export const getProducts = async (req, res) => {
    try {
        const Products = await product.find({});
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const Product = await product.findOne({ 'id': id });

        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}