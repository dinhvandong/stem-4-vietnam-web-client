import React from "react";

const SchoolBanner = () => {
  return (
    <div>
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://www.communityplaythings.com/-/media/images/cpus/resources/article-banner/2018/kids-in-stem_banner-2.ashx?rev=6a7967a1613040b0b130c6e6dc3a24d4&hash=B17DD9640B7C5993E071EFCCC054BB12)",
        }} // If image is in the public folder
      >
        <div className="absolute md:mt-20 h-[400px] mt-[440px] inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold">SCHOOLS</h1>
          <p className="text-yellow-400 text-xl mt-10">Bring Purposeful STEM Into Your Curriculum</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolBanner;
