import React from 'react'
import { MdMenu } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    function gotoCourses(){
        navigate("/courses/")
    }
    function gotoHome(){
        navigate("/")
    }
    function gotoContract(){
        navigate("/contract")
    }
    function gotoTech(){
        navigate("/tech")
    }
    function gotoSchool(){
        navigate("/school")
    }
    function gotoLocation(){
        navigate("/location")
    }
    return (
        <div className='bg-bg_color w-full h-auto md:p-2 md:h-[80px] flex  flex-col md:flex-row justify-between items-center'>
            <div className='flex w-full items-center flex-col font-bold md:font-thin md:flex-row  md:m-5 md:p-5'>
                <div className='h-full w-full md:w-[20%] px-5 py-3  items-center flex justify-between md:justify-start hover:cursor-pointer'>
                    <img className='h-[80px] w-[160px]' src='https://www.codekids.org.uk/wp-content/uploads/2019/02/Logo-new.png' />
                    <MdMenu className='block md:hidden' size={24} />

                </div>
                <div 
                onClick={gotoHome}
                className='hover:cursor-pointer h-full w-full px-5 py-3 hover:underline md:hover:no-underline hover:bg-yellow-400 md:w-[10%] flex  justify-start md:justify-center'>
                    <p>HOME</p>
                </div>
                <div
                onClick={gotoCourses}  
                className='hover:cursor-pointer h-full w-full px-5 py-3 hover:underline md:hover:no-underline hover:bg-yellow-400 md:w-[10%] flex  justify-start md:justify-center'>
                    <p>COURSES</p>
                </div>
                <div 
                onClick={gotoTech}
                className=' hover:cursor-pointer h-full w-full px-5 py-3 hover:underline md:hover:no-underline hover:bg-yellow-400 md:w-[10%] flex  justify-start md:justify-center'>
                    <p>TECHNOLOGIES</p>
                </div>
                <div
                onClick={gotoSchool} 
                className='hover:cursor-pointer h-full w-full px-5 py-3 hover:underline md:hover:no-underline hover:bg-yellow-400 md:w-[10%] flex  justify-start md:justify-center'>
                    <p>SCHOOLS</p>
                </div>
                <div 
                onClick={gotoLocation}
                className='hover:cursor-pointer h-full w-full px-5 py-3 hover:underline md:hover:no-underline hover:bg-yellow-400 md:w-[10%] flex  justify-start md:justify-center'>
                    <p>LOCATIONS</p>
                </div>
                <div
                onClick={gotoContract} 
                className='hover:cursor-pointer h-full w-full px-5 py-3 hover:underline md:hover:no-underline hover:bg-yellow-400 md:w-[10%] flex  justify-start md:justify-center'>
                    <p>CONTACT</p>
                </div>
                <div className='hover:cursor-pointer h-full w-full px-5 py-3 hover:underline md:hover:no-underline hover:bg-yellow-400 md:w-[20%] flex  justify-start md:justify-center'>
                    <button 
                    onClick={gotoCourses}
                    className='bg-transparent md:bg-yellow-400  md:px-5 md:py-2' >BOOK NOW</button>
                </div>

            </div>
        </div>
    )
}

export default Header