import React from 'react'
import CourseItem from './CourseItem';

const Courses = () => {
    // Sample Data
const items = [
    { id: 1, title: "Robotics with VEXcode (Virtual)", image: "https://www.codekids.org.uk/wp-content/uploads/2020/11/VEX-VR.jpg" },
    { id: 2, title: "Coding with Microbit", image: "https://www.codekids.org.uk/wp-content/uploads/2020/05/microbit-technologies.jpg" },
    { id: 3, title: "App Development", image: "https://www.codekids.org.uk/wp-content/uploads/2020/03/mobile-app-dev-700x450-1.jpg" },
    { id: 4, title: "Lego Robotics Mindstorm", image: "https://www.codekids.org.uk/wp-content/uploads/2019/11/roblox-coding.jpg" }, 
    { id: 5, title: "Virtual reality coding", image: "    https://www.codekids.org.uk/wp-content/uploads/2020/03/ev3-mindstorms.jpg" }, 


];

    https://www.codekids.org.uk/wp-content/uploads/2020/03/ev3-mindstorms.jpg
    return (

        <div className='flex flex-col items-center justify-between w-full h-auto p-5 font-mono bg-bg_color'>
            <div className='flex flex-row items-center justify-center w-full h-auto'>
                <div className='w-[35%] h-[1px] ml-5 bg-black'>
                </div>
                <p className='text-center w-full text-black font-bold ml-5 mr-5 text-[40px]'>Be the Creators of the Future
                </p>
                <div className='w-[35%] h-[1px] mr-5 bg-black'>

                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[80%] h-auto'>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {items.map(item => (
                        <CourseItem key={item.id} title={item.title} image={item.image} />
                    ))}
                </div>

                <div className='flex items-center justify-center w-full mt-5'>
                    <div className='flex  w-[200px] items-center justify-center px-5 py-3 bg-brown_color'>
                        <p className='font-bold text-white'>Full Collection</p>

                    </div>
                </div>


            </div>
        </div>
    )
}


export default Courses