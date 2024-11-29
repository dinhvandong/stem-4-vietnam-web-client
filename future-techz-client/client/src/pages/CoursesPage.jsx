import React from "react";
import Header from "../components/Header";
import CoursesBanner from "../components/CoursesBanner";
import Timetbale from "../components/Timetbale";
import CoursesList from "../components/CoursesList";
import Footer from "../components/Footer";
import JoinNow from "../components/JoinNow";
import Question from "../components/Question";

const CoursesPage = () => {
  return (
    <div className="">
      <Header />
      <CoursesBanner />
      <div className="flex justify-center mt-5">
        <div className="w-[80%]">
          <Timetbale />
          <CoursesList/>
          <Question/>
        </div>
      </div>
      <JoinNow/>
      <Footer/>
    </div>
  );
};

export default CoursesPage;
