import React from 'react'
import Header from '../components/Header'
import imagesData from './images.json'; // Import your JSON image data
import ImageSlider from '../components/ImageSlider';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
import JoinNow from '../components/JoinNow';

const HomePage = () => {
  return (
    <div className='flex flex-col h-auto w-screen bg-white'>
        <Header/>
        <ImageSlider imageData={imagesData} />
        <div className='w-full h-[150px] bg-yellow-400 text-4xl font-bold text-white flex justify-center items-center'>

            <p className='text-center'>TECHNOLOGIES AND COURSES</p>

        </div>
        <Courses/>
        <JoinNow/>
        <Footer/>



    </div>
  )
}

export default HomePage