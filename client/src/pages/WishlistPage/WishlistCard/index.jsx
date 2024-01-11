import React from 'react'

const WishlistCard = ({image,title,price}) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body p-5">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )   
}

export default WishlistCard