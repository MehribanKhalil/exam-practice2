import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/CommonComponents/Button'
import './index.scss'


const Footer = () => {
  return (
    <footer className=' text-main-color footer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 px-10 md:px-20  xl:px-52 gap-16 py-16'>
        <div className='col-span-2'>
            <img className=' max-w-[90px]'  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
            <div className=' border-b border-black flex justify-between'>
            <input type="email" className=' bg-transparent outline-none px-2 py-5 placeholder:italic ' placeholder='Your Email '/> 
            <button className=' bg-light-green py-2 px-5  text-main-color  hover:bg-hover-color transition'>
            send
        </button>
            </div>
        </div>
        <div className=' flex  flex-col gap-3 '>
            <h3 className=' text-2xl'>About</h3>
            <NavLink className='footer-item'>About Us</NavLink>
            <NavLink  className='footer-item'>Our Partners</NavLink>
            <NavLink  className='footer-item'>Our Services</NavLink>

        </div>

        <div className=' flex  flex-col gap-3'>
            <h3 className=' text-2xl'>Contact</h3>
            <NavLink className='footer-item'>Contact Us</NavLink>
            <NavLink  className='footer-item'>FAQ Pagers</NavLink>
            <NavLink  className='footer-item'>About Me</NavLink>

        </div>

        <div className=' flex  flex-col gap-3'>
            <h3 className=' text-2xl'>Follow Us</h3>

        </div>
    </footer>
  )
}

export default Footer