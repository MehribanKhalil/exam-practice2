import { Products } from "../models/productModel.js"


export const createProduct=async(req,res)=>{
    try {
        const product = new Products({...req.body})
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}

export const getProducts=async(req,res)=>{
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}

export const getProductsById=async(req,res)=>{
    try {
        const {id}=req.params
        const product= await Products.findById(id)

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}

export const deleteProduct=async(req,res)=>{
    try {
        const {id}=req.params

        const product= await Products.findByIdAndDelete(id)

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}
