import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/CommonComponents/Loader'
import { wishlistContext } from '../../context/wislistContext'

const DetailPage = () => {

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {fawProducts} = useContext(wishlistContext)
    const { id } = useParams()

    const getProducts = async () => {
        const res = await axios.get(`http://localhost:8000/api/product/${id}`)
        setProduct(res.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div className=' py-24 flex justify-center items-center' >
            {
               isLoading ? <Loader/>
               :
               product &&
               <div className="card w-96 bg-base-100 shadow-xl text-main-color">
                   <figure className="px-10 pt-10"><img src={product?.image} alt="Album" /></figure>
                   <div className="card-body items-center text-center">
                       <h2 className="card-title">{product?.title}</h2>
                       <p>${product?.price}</p>
                       <div className="card-actions justify-end">
                           <button className="btn btn-primary bg-light-green py-2 px-5  text-main-color my-6">Add to Wishlist</button>
                       </div>
                   </div>
               </div>
            }

        </div>
    )
}

export default DetailPage