import React from 'react'
import EventCard from '../../CommonComponents/EventCard'
import './index.scss'
const EventsSection = () => {
  return (
    <section className='evet-section pb-16'>
<div className="heading text-center py-10 text-main-color">
            <p  className=' italic text-lg'>Devoted to wonderful beauty</p>
            <h2>Events Pricing</h2>
        </div>

        <div className="contnet grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 md:px-20  xl:px-52 gap-12 py-10">
            <EventCard price='16' title='Birthday' />
            <EventCard price='31 ' title='Wedding ' />
            <EventCard price='52' title='Party' />
        </div>
    </section>
  )
}

export default EventsSection