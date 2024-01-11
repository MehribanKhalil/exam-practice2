import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { wishlistContext } from '../../../context/wislistContext'

const ProductCard = ({id, image,title,price,product}) => {
  const {fawProducts,addToWislist} = useContext(wishlistContext)

  const isWishlist = fawProducts.some(x => x._id === id)

  return (
    <div  className=' text-center space-y-2 text-main-color my-4'>
        <Link to={id} > <img src={image} alt="" /></Link>
        <div>
            <h3 className=' text-xl'>{title}</h3>
            <p> ${price}</p>
            <button className={`btn btn-primary py-2 px-5 ${isWishlist ? 'bg-red-500' : 'bg-light-green '}  text-main-color my-6`} onClick={()=>addToWislist(product)}> Add to Wishlist</button>
        </div>
    </div>
  )
}

export default ProductCard