import React from 'react'
import './index.scss'
import Button from '../../CommonComponents/Button'
const OurMission = () => {
  return (
    <div className=' our-mission py-28  px-10 md:px-32 xl:px-52'>
        <div className="content flex flex-col lg:flex-row">
        <div className=' bg-main-color  grid place-items-center w-full lg:w-1/2 p-5 xl:p-20'>
           <div className=' text-white px-10 space-y-5' >
           <h2>Our Mission</h2>
            <p className=''>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
            
            <Button>Read More</Button>
           </div>
        </div>

        <div className='w-full lg:w-1/2'>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" className=' w-full' />
        </div>
        </div>
    </div>
  )
}

export default OurMission