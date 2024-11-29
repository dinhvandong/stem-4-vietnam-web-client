import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import BookComp from "../components/BookComp";

const ContractPage = () => {
  return (
    <div>
      <Header />
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col bg-gray-200 md:w-[30%]">
          <div className="p-12">
            <div className="p-5">
              <p className="border-b-2 border-orange-400 p-3">LONDON OFFICE</p>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <FaHome />
              </div>
              <div className="ml-3">
                <p>Code Kids Robotics Ltd. London SE3 9LL</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <FaPhone />
              </div>
              <div className="ml-3">
                <p>0800-010-6912</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <IoIosMail />
              </div>
              <div className="ml-3">
                <p>info@codekids.org.uk</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <FaClock />
              </div>
              <div className="ml-3">
                <p>Mon – Sat 9.00 – 18.00</p>
              </div>
            </div>
            <div className="p-3 bg-yellow-400 text-black text-center mt-3 hover:cursor-pointer hover:bg-black hover:text-white">
              <p>EMAIL LONDON OFFICE</p>
            </div>
          </div>
          <div className="p-12">
            <div className="p-5">
              <p className="border-b-2 border-orange-400 p-3">LONDON OFFICE</p>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <FaHome />
              </div>
              <div className="ml-3">
                <p>Code Kids Robotics Ltd. London SE3 9LL</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <FaPhone />
              </div>
              <div className="ml-3">
                <p>0800-010-6912</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <IoIosMail />
              </div>
              <div className="ml-3">
                <p>info@codekids.org.uk</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <FaClock />
              </div>
              <div className="ml-3">
                <p>Mon – Sat 9.00 – 18.00</p>
              </div>
            </div>
            <div className="p-3 bg-yellow-400 text-black text-center mt-3 hover:cursor-pointer hover:bg-black hover:text-white">
              <p>EMAIL LONDON OFFICE</p>
            </div>
          </div>
          <div className="p-12">
            <div className="p-5">
              <p className="border-b-2 border-orange-400 p-3">LONDON OFFICE</p>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <FaHome />
              </div>
              <div className="ml-3">
                <p>Code Kids Robotics Ltd. London SE3 9LL</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <FaPhone />
              </div>
              <div className="ml-3">
                <p>0800-010-6912</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <IoIosMail />
              </div>
              <div className="ml-3">
                <p>info@codekids.org.uk</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-3">
              <div>
                <FaClock />
              </div>
              <div className="ml-3">
                <p>Mon – Sat 9.00 – 18.00</p>
              </div>
            </div>
            <div className="p-3 bg-yellow-400 text-black text-center mt-3 hover:cursor-pointer hover:bg-black hover:text-white">
              <p>EMAIL LONDON OFFICE</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-[70%] p-16 items-center">
          <div className="flex flex-col text-center  items-center">
            <p className="p-3 border-b-2 border-orange-400 text-3xl">
              Talk To Us – We’re Here To Help
            </p>
            <p className="mt-5 w-[80%] text-center">
              At Code Kids, we run robotics and coding classes and holiday tech
              camps for kids aged 7+ We provide code clubs and in-school
              enrichment workshops as well. If you are a school looking to get
              some help with your coding curriculum, or a parent looking for a
              session for your child, please do get in touch. We do occasionally
              host birthday parties as well.
            </p>
          </div>
          <div className="flex md:flex-row flex-col mt-10 w-[80%] justify-between">
            <div>
              <p>FIRST NAME*</p>
              <div className="mt-5">
                <input
                  className="bg-gray-100 focus:outline-none p-2 border-[1px] font-thin md:w-[350px] w-full "
                  type="text"
                />
              </div>
            </div>
            <div>
              <p>LAST NAME*</p>
              <div className="mt-5">
                <input
                  className="bg-gray-100 focus:outline-none p-2 border-[1px] font-thin md:w-[350px] w-full "
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col mt-10 w-[80%] justify-between">
            <div>
              <p>EMAIL ADDRESS*</p>
              <div className="mt-5">
                <input
                  className="bg-gray-100 focus:outline-none p-2 border-[1px] font-thin md:w-[350px] w-full"
                  type="email"
                />
              </div>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              <div className="mt-5">
                <input
                  className="bg-gray-100 focus:outline-none p-2 border-[1px] font-thin md:w-[350px] w-full"
                  type="tel"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 w-[80%]">
            <p>SUBJECT</p>
            <div className="mt-5">
              <input
                className="bg-gray-100 focus:outline-none p-2 border-[1px] font-thin w-full "
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col mt-10 w-[80%]">
            <p>HOW CAN WE HELP?</p>
            <div className="mt-5">
              {/* <input
                className="bg-gray-100 focus:outline-none p-2 border-[1px] font-thin w-full "
                type="text"
              /> */}
              <textarea
              className="bg-gray-100 focus:outline-none p-2 border-[1px] font-thin w-full"
               name="" id=""></textarea>
            </div>
          </div>
          <div className="bg-yellow-400 p-3 hover:cursor-pointer mt-10 hover:bg-black hover:text-white">
            <p>SEND NOW</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContractPage;
