import React from 'react'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import OurMission from '../../components/HomePageComponents/OurMission'
import FlowersPriging from '../../components/HomePageComponents/FlowersPricing'
import EventsSection from '../../components/HomePageComponents/EventsSection'
import OurTeam from '../../components/HomePageComponents/OurTeam'

const Home = () => {
  return (
   <>
    <HeroSection/>
    <OurMission/>
    <FlowersPriging/>
    <EventsSection/>
    <OurTeam/>
   </>
  )
}

export default Home