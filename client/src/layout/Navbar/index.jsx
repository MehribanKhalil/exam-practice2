import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './index.scss'
import { wishlistContext } from '../../context/wislistContext';
const Navbar = () => {
    const {fawProducts}=useContext(wishlistContext)
    return (
        <>
            <nav className=' relative'>
                <div className=' absolute top-0 left-0 z-20  w-full '>
                    <div className=' flex justify-between navbar py-5 px-10  '>
                        <div>
                            <NavLink to={'/'} className='text-white text-2xl font-bold'>Floral Studio </NavLink>

                        </div>
                        <div className=' hidden md:flex font-semibold gap-6  items-center' >
                            <NavLink className='nav-item' to={'/'}>Home</NavLink>
                            <NavLink className='nav-item' >About Us</NavLink>
                            <NavLink className='nav-item' >Pricing</NavLink>
                            <NavLink className='nav-item' >Contact</NavLink>
                            <NavLink className='nav-item' to={'/admin'}>Admin</NavLink>
                            <NavLink to={'/wishlist'} className=' relative  text-light-green' >
                                <span className=' absolute w-5 h-5 rounded-full flex justify-center items-center  bg-blue-500 -top-2 -right-2 text-sm '>{fawProducts.length}</span>
                                <CiHeart size={26} />
                            </NavLink>

                        </div>
                        <div className='block md:hidden text-light-green'>
                            <button className=' text-light-green'><FaBars size={23} /></button>
                        </div>
                    </div>
                </div>


                {/* <div className='mobile-nav bg-red-700'>
                    <div className="  absolute top-0 left-0  z-40">
                        <NavLink className='nav-item' to={'/'}>Home</NavLink>
                        <NavLink className='nav-item' >About Us</NavLink>
                        <NavLink className='nav-item' >Pricing</NavLink>
                        <NavLink className='nav-item' >Contact</NavLink>
                        <NavLink className='nav-item' to={'/admin'}>Admin</NavLink>
                        <NavLink to={'/wishlist'} className=' relative  text-light-green' >
                            <span className=' absolute w-5 h-5 rounded-full flex justify-center items-center  bg-blue-500 -top-2 -right-2 text-sm '>0</span>
                            <CiHeart size={26} />
                        </NavLink>
                    </div>
                </div> */}

            </nav>
        </>
    )
}

export default Navbar