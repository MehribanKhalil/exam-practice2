import React from 'react'
import TeamCard from './TeamCard'

const OurTeam = () => {
  return (
    <div className=' pb-16'>
      <div className="heading text-center py-10 text-main-color">
        <p className=' italic text-lg'>Contacts</p>
        <h2>Our Team</h2>
      </div>

      <div>

        <div className="contnet grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 md:px-20  xl:px-48 py-5">
          <TeamCard
            image='https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg'
            name='Velva Kopf'
            job='Biologist'
          />


          <TeamCard
            image='https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg'
            name='Sarah Palmer'
            job='Florist'
          />


          <TeamCard
            image='https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg'
            name='Jessica Swift'
            job='Photographer'
          />
        </div>
      </div>
    </div>
  )
}

export default OurTeam