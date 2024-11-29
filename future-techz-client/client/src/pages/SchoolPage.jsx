import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SchoolBanner from '../components/SchoolBanner'
import SchoolQuote from '../components/SchoolQuote'
import BookComp from '../components/BookComp'

const SchoolPage = () => {
  return (
    <div>
        <Header/>
        <SchoolBanner/>
        <div className='w-full h-[150px] bg-yellow-400 text-4xl font-bold text-white flex justify-center items-center'>

            <p className='text-center font-thin text-black'>In-House Workshops or CPD Courses on INSET Days</p>

        </div>
        <SchoolQuote/>
        <BookComp/>
        <Footer/>
    </div>
  )
}

export default SchoolPage