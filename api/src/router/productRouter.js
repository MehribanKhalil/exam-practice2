
import express from 'express'
import { createProduct, deleteProduct, getProducts, getProductsById } from '../controller/productController.js'

export const router=express.Router()


router.post("/product",createProduct)
router.get("/product",getProducts)
router.get("/product/:id",getProductsById)
router.delete("/product/:id",deleteProduct)