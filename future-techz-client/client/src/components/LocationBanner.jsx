import React from 'react'

const LocationBanner = () => {
  return (
    <div>
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/3/39/Hibbing_High_School_2014.jpg)",
        }} // If image is in the public folder
      >
        <div className="absolute md:mt-20 h-[400px] mt-[440px] inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold">OUR AMAZING VENUES</h1>
          <p className="text-yellow-400 text-xl mt-10">We Only Partner With And Work Within Schools With Exceptional State-of-the-Art Facilities</p>
        </div>
      </div>
    </div>
  )
}

export default LocationBanner