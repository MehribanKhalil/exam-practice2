import React, { useEffect, useState } from 'react'
import ProductCard from '../../CommonComponents/ProductCard'
import axios from 'axios'
import './index.scss'
const FlowersPriging = () => {
    const [filerIsOpen, setFilerIsOpen] = useState(false)
    const [products, setProducts] = useState([])


    const getProducts = async () => {
        const res = await axios.get("http://localhost:8000/api/product/")
        setProducts(res.data)
    }
    useEffect(() => {
        getProducts()
    }, [])

    const fillertByPrice = (key) => {

        const sortedProduct=[...products]
        switch (key) {
            case 'inc':
                sortedProduct.sort((a,b)=>a.price - b.price)
                break;
            case 'dec':
                sortedProduct.sort((a,b)=>b.price - a.price)
                break;

            default:
                break;
        }

        setProducts(sortedProduct)
    }


    return (
        <section className=' flowers-section'>
            <div className="heading text-center py-10 text-main-color">
                <p className=' italic text-lg'>Devoted to wonderful beauty</p>
                <h2>Flowers Pricing</h2>

            </div>

            <div className=' text-end px-10 relative'>
                <button onClick={() => setFilerIsOpen(!filerIsOpen)} className=' bg-light-green py-2 px-5  text-main-color'>Filter By Price</button>
                <div className={`${filerIsOpen ? "flex" : "hidden"}  flex-col  absolute  right-6 top-12 bg-main-color text-white p-5 gap-4 mx-5`}>
                    <button onClick={()=>fillertByPrice('inc')} className='italic'>Low to High</button>
                    <button onClick={()=>fillertByPrice('dec')} className='italic'>High to Low</button>
                </div>
            </div>

            <div className="products grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 md:px-20  xl:px-52 gap-12">
                {
                    products && products.map((product) => (
                        <ProductCard
                            id={product._id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            product={product}
                        />
                    ))
                }

            </div>
        </section>
    )
}

export default FlowersPriging