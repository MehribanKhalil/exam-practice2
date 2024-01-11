import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { FaInstagram } from "react-icons/fa";
const TeamCard = ({ image, name, job }) => {
  return (
    <div className=' group  cursor-pointer   text-center space-y-2 text-main-color my-4'>
      <div className=' relative'>
        <img src={image} alt="" className=' w-full' />
        <div className=' hidden hover:duration-300  group-hover:flex flex-col gap-3 p-5 absolute left-0 top-0  '>
          <button className=' bg-white flex justify-center items-center rounded-full w-[35px] h-[35px]'><FaFacebookF size={24} /></button>
          <button className=' bg-white flex justify-center items-center rounded-full w-[35px] h-[35px]'><FaXTwitter size={24}  /></button>
          <button className=' bg-white flex justify-center items-center rounded-full w-[35px] h-[35px]'><FaInstagram size={24} /></button>
        </div>
      </div>
      <div>
        <h3 className=' text-xl'>{name}</h3>
        <p> {job}</p>

      </div>
    </div>
  )
}

export default TeamCard