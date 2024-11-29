import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import imagesData from "./images.json"; // Import your JSON image data

const TechPage = () => {
  return (
    <div>
      <Header />
      <ImageSlider imageData={imagesData} />
      <div className="w-full h-[150px] bg-yellow-400 text-4xl font-bold text-white flex justify-center items-center">
        <p className="text-center">TECHNOLOGIES AND COURSES</p>
      </div>
      <Footer />
    </div>
  );
};

export default TechPage;
