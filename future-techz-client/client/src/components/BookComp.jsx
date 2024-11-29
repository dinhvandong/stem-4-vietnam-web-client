import React from "react";

const BookComp = () => {
  return (
    <div className="bg-[#3F3F3F] items-center text-white w-full mt-10 p-10">
      <div className="md:w-[80%] w-full justify-center items-center flex md:flex-row flex-col">
        <div className="flex flex-col md:w-[50%] w-full justify-center">
          <p className="p-3 border-b-2 border-yellow-400 text-4xl">
            Coding And Robotics Classes
          </p>
          <p className="mt-10 p-3 text-xl">
          Robotics and coding holiday camps and classes for kids aged 7-12
          </p>
        </div>
        <div className="flex flex-col justify-center md:ml-20 md:mt-0 mt-10">
            <div className="bg-yellow-400 hover:bg-black text-black hover:text-white hover:cursor-pointer p-3 w-[150px] text-center md:items-start items-center">
                <p>BOOK NOW</p>
            </div>
            <p className="text-gray-500 mt-5">Find Out What’s On</p>
        </div>
      </div>
    </div>
  );
};

export default BookComp;
