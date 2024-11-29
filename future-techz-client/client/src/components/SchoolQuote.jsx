import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const SchoolQuote = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center mt-10">
      <p className="text-3xl p-3">ENRICHMENT WITHIN SCHOOLS</p>
      <div className="md:w-[50%] w-[80%] flex flex-col text-start mt-10">
        <p>
          If you are a school looking for STEM enrichment workshops to enhance
          your curriculum and bring hands-on learning into the classroom through
          robotics and coding, then please do get in touch with us. If you
          require a grant to bring us on board, then we can help you to get that
          process kick started. Find us on the STEM register.
        </p>
        <br />
        <p>
          Alternatively, we do offer CPD classes for class teachers looking to
          either enhance their coding curriculum or completely transform it,
          with opportunities for cross-curricular learning. Our coding sessions
          also help children with literacy, maths and science. Our hands-on
          approach has been proven to help children learn better and increase
          attention and attainment.
        </p>
      </div>
      <div className="flex flex-col items-start md:w-[50%] w-[80%] mt-20">
        <div className="w-full">
          <input
            placeholder="NAME*"
            className="w-full bg-gray-100 outline-none p-2 border-[1px] placeholder:text-black border-gray-300"
            type="text"
          />
        </div>
        <div className="w-full mt-5">
          <input
            placeholder="EMAIL*"
            className="w-full bg-gray-100 outline-none p-2 border-[1px] placeholder:text-black border-gray-300"
            type="text"
          />
        </div>
        <div className="w-full mt-5">
          <input
            placeholder="PHONE"
            className="w-full bg-gray-100 outline-none p-2 border-[1px] placeholder:text-black border-gray-300"
            type="text"
          />
        </div>
        <div className="w-full mt-5">
          <input
            placeholder="SCHOOL NAME"
            className="w-full bg-gray-100 outline-none p-2 border-[1px] placeholder:text-black border-gray-300"
            type="text"
          />
        </div>
        <div className="w-full mt-5">
          <input
            placeholder="BUDGET*"
            className="w-full bg-gray-100 outline-none p-2 border-[1px] placeholder:text-black border-gray-300"
            type="text"
          />
        </div>
        <div className="w-full mt-5">
          <textarea
            placeholder="SERVICES REQUIRED*"
            className="w-full bg-gray-100 outline-none p-2 border-[1px] placeholder:text-black border-gray-300"
          />
        </div>
        <div className="bg-yellow-400 p-3 hover:cursor-pointer mt-5 hover:bg-black hover:text-white">
          <p>GET FREE QUOTE</p>
        </div>
      </div>
      {/* <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel> */}
    </div>
  );
};

export default SchoolQuote;
