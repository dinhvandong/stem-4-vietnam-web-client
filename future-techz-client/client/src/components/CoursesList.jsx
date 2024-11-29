import { FaCalendarAlt } from "react-icons/fa";

const CoursesList = () => {

  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-row">
        <div className="bg-[#F4F4F4] rounded-md hover:cursor-pointer w-[200px] justify-center flex">
          <p className="p-3 font-thin">Course Types</p>
        </div>
        <div className="bg-[#F4F4F4] rounded-md hover:cursor-pointer ml-2 w-[200px] justify-center flex">
          <p className="p-3 font-thin">Locations</p>
        </div>
        <div className="bg-[#F4F4F4] rounded-md hover:cursor-pointer ml-2 w-[200px] justify-center flex">
          <p className="p-3 font-thin">Age Range</p>
        </div>
        <div className="bg-yellow-400 hover:bg-[#333333] hover:text-white rounded-md hover:cursor-pointer ml-2 w-[200px] justify-center flex">
          <p className="p-3 font-thin">FIND COURSE</p>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex flex-row justify-start border-b-2 ">
          <div className="w-[20%] mb-10">
            <img
              src="https://www.codekids.org.uk/wp-content/uploads/2018/12/GIFT-CARD-600x401.png"
              alt=""
            />
          </div>
          <div className="w-[80%] ml-10">
            <div>
              <p className="text-lg hover:cursor-pointer hover:underline hover:text-yellow-400">Code Kids Gift Card</p>
            </div>
            <div className="flex flex-row mt-10">
              <div className="bg-yellow-400 text-white hover:cursor-pointer hover:bg-[#333333]">
                <p className="p-2">Select amount</p>
              </div>
              <div className="bg-yellow-400 text-white hover:cursor-pointer hover:bg-[#333333] ml-3">
                <p className="p-2">More info</p>
              </div>
              <div className="bg-yellow-400 text-white hover:cursor-pointer hover:bg-[#333333] ml-3">
                <p className="p-2">Book now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start border-b-2 mt-10 ">
          <div className="w-[20%] mb-10">
            <img
              src="https://www.codekids.org.uk/wp-content/uploads/2022/11/Website-13-600x401.jpg"
              alt=""
            />
          </div>
          <div className="w-[80%] ml-10">
            <div>
              <p className="text-lg hover:cursor-pointer hover:underline hover:text-yellow-400">Minecraft Coding – Autumn Term 2024</p>
            </div>
            <div className="flex flex-row mt-10">
              <div className="bg-yellow-400 text-white hover:cursor-pointer hover:bg-[#333333]">
                <p className="p-2">More info</p>
              </div>
              <div className="bg-yellow-400 text-white hover:cursor-pointer hover:bg-[#333333] ml-3">
                <p className="p-2">Book now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start border-b-2 mt-10 ">
          <div className="w-[20%] mb-10">
            <img
              src="https://www.codekids.org.uk/wp-content/uploads/2020/06/Website-17-600x401.jpg"
              alt=""
            />
          </div>
          <div className="w-[80%] ml-10">
            <div>
              <p className="text-lg hover:cursor-pointer hover:underline hover:text-yellow-400">
                Blackheath – Robotics with Cozmo Club, Autumn Term 2024
              </p>
            </div>
            <div className="flex flex-row items-center mt-5 text-sm">
              <div>
                <FaCalendarAlt />
              </div>
              <p className="ml-1">September 20, 2024</p>
            </div>
            <div className="flex flex-row mt-10">
              <div className="bg-yellow-400 text-white hover:cursor-pointer hover:bg-[#333333]">
                <p className="p-2">More info</p>
              </div>
              <div className="bg-yellow-400 text-white hover:cursor-pointer hover:bg-[#333333] ml-3">
                <p className="p-2">Book now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CoursesList;
