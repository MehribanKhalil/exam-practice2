import React, { useContext } from 'react'
import { wishlistContext } from '../../context/wislistContext'
import WishlistCard from './WishlistCard'

const WishlistPage = () => {
    const { fawProducts } = useContext(wishlistContext)
    return (
        <div className=' grid grid-cols-5 gap-10 py-24 px-24'>
            {
                fawProducts &&
                fawProducts.map((item) => (
                    <WishlistCard
                        image={item.image}
                        title={item.title}
                        price={item.price}

                    />
                ))
            }
        </div>
    )
}

export default WishlistPage