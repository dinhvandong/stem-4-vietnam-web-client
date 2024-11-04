import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='flex text-white flex-col md:flex-row items-center justify-center w-full h-auto md:h-[500px] p-5 font-mono bg-black'>

            <div className=' flex flex-col md:flex-row  justify-center w-full md:w-[80%]'>

                <div className='w-full md:w-1/4 px-5 flex flex-col'>

                    <img className='h-[150px]' src='https://www.codekids.org.uk/wp-content/uploads/2019/02/Logo-new.png' />

                    <div className='mt-2 w-full'>
                        <p>Robotics and coding classes and holiday tech camps for kids aged 7+ We provide code clubs and in-school enrichment workshops.

                        </p>
                    </div>

                    <div className='mt-5 bg-yellow-400 text-black'>
                        <p className='px-5 py-3'>Learn more</p>
                    </div>



                </div>

                <div className='w-full md:w-1/4  px-5 flex flex-col'>

                    <div className='font-bold text-yellow-400'>
                        <p>Quick Link</p>
                    </div>

                    <div className='mt-5'>
                        <p>HOME</p>
                    </div>


                    <div className='mt-5'>
                        <p>COURSES</p>
                    </div>


                    <div className='mt-5'>
                        <p>TECHNOLOGIES</p>
                    </div>

                    <div className='mt-5'>
                        <p>SCHOOLS</p>
                    </div>

                    <div className='mt-5'>
                        <p>LOCATIONS</p>
                    </div>

                    <div className='mt-5'>
                        <p>CONTACT</p>
                    </div>

                    <div className='mt-5'>
                        <p>BOOK NOW</p>
                    </div>

                </div>

                <div className='w-full md:w-1/4 px-5 flex flex-col'>


                    <div className='font-bold text-yellow-400'>CONTACT US TODAY</div>

                    <div className='mt-5'>
                        Locations</div>

                    <div>Backheath</div>

                    <div>Greenwich</div>

                    <div>Hampstead</div>

                    <div>Sevenoaks</div>

                    <div>Wimbledon</div>

                    <div>0800-010-6912</div>
                    <div>info@codekids.org.uk</div>
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday - Sunday: 9:00 AM - 12:00 PM</div>

                </div>


                <div className='w-full md:w-1/4 px-5 flex flex-col'>

                    <div className='font-bold text-yellow-400'>
                        Get Social
                    </div>
                    <div className='flex flex-row mt-5'>

                        <div className='ml-2'>
                            <FaFacebookSquare size={20} />
                        </div>
                        <div className='ml-2'>
                            <FaSquareTwitter size={20} />
                        </div>
                        <div className='ml-2'>
                            <FaYoutube size={20} />
                        </div>
                        <div className='ml-2'>
                            <FaInstagram size={20} />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer