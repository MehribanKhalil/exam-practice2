import React from 'react'
import Button from '../Button'

const EventCard = ({price,title}) => {
  return (
    <div className=' border border-main-color p-14 text-main-color text-center'>
        <p className=' text-center flex items-center pb-10  justify-center'><h2>${price}</h2>per table</p>
        <h3 className=' text-2xl'>{title}Events</h3>
        <p className=' py-6'>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <Button>Shop now</Button>
    </div>
  )
}

export default EventCard