import React, { useState } from "react";


const JoinNow = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Select an item");

    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];


    return (
        <div className='flex text-white flex-col items-center justify-center w-full  h-auto md:h-[300px] p-5 font-thin bg-[#353C4D]'>

            <div>
                <p className='text-2xl'>Join Our Mailing List to be The First To Hear About New Courses
                </p>
            </div>

            <div className='mt-2'>
                <p>Become Part of The Code Kids Family</p>
            </div>

            <div className='mt-5 flex w-[60%] justify-center items-center flex-col md:flex-row'>

                <div className='w-full md:w-1/4 ml-5 mt-5 '>
                    <input className='w-full px-5 py-3' name='name' placeholder='Name' />
                </div>

                <div className='w-full md:w-1/4 ml-5 mt-5'>
                    <input className='w-full px-5 py-3' name='email' placeholder='Email' />
                </div>
                <div className='w-full md:w-1/4 ml-5 mt-5'>

                    <div className="relative w-full">
                        {/* Input field */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full px-5 py-3 border border-white bg-white text-black text-left"
                        >
                            {selectedItem}
                        </button>

                        {/* Dropdown List */}
                        {isOpen && (
                            <ul className="absolute mt-1 w-full bg-black border text-white border-gray-300 z-10">
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="px-5 py-3 hover:bg-blue-600 cursor-pointer"
                                        onClick={() => {
                                            setSelectedItem(item);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>


                    {/* <input className='w-full px-5 py-3' name='region' placeholder='Region' /> */}
                </div>
                <div className='w-full md:w-1/4 ml-5 mt-5'>
                    <button className='bg-yellow-400 px-5 py-3 text-black font-thin hover:bg-[#333333] hover:text-white' >JOIN NOW</button>
                </div>

            </div>




        </div>
    )
}

export default JoinNow