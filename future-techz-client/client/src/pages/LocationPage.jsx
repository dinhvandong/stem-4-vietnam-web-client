import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LocationBanner from '../components/LocationBanner'
import Places from '../components/Places'
import TestPlace from '../components/TestPlace'
import JoinNow from '../components/JoinNow'

const LocationPage = () => {
  return (
    <div>
        <Header/>
        <LocationBanner/>
        <div className='w-full h-[150px] bg-yellow-400 text-4xl font-bold text-white flex justify-center items-center'>

            <p className='text-center font-thin text-black'>Do You Already Know Which Location You’d Like?</p>

        </div>
        <Places/>
        {/* <TestPlace/> */}
        <JoinNow/>
        <Footer/>
    </div>
  )
}

export default LocationPage