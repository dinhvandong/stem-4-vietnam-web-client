import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

const Question = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };
  const toggleDiv1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDiv2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDiv3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleDiv4 = () => {
    setIsOpen4(!isOpen5);
  };
  const toggleDiv5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleDiv6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleDiv7 = () => {
    setIsOpen7(!isOpen7);
  };
  const toggleDiv8 = () => {
    setIsOpen8(!isOpen8);
  };
  const toggleDiv9 = () => {
    setIsOpen9(!isOpen9);
  };
  const toggleDiv10 = () => {
    setIsOpen10(!isOpen10);
  };
  const toggleDiv11 = () => {
    setIsOpen11(!isOpen11);
  };
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">Frequently Asked Questions</p>
        <div className="h-[3px] w-[250px] bg-yellow-400 mt-5"></div>
        <p className="text-center text-wrap w-[70%] mt-5 mb-10">
          Our online camps run slightly differently to our in-house camps, so
          you might have lots of questions. See our answers to some of your
          frequently asked questions below
        </p>
      </div>
      {/* question1 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            What steps do you take to protect the children in an online setting
            like this one?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              We take safeguarding of our children very seriously, and it is the
              same whether they are in an in-house classroom or a virtual one.
              We encourage them to become good digital citizens and stay safe
              online. This means:
            </p>
            <br />
            <ul className="list-disc">
              <li>Protecting private information for themselves and others</li>
              <li>Protecting private information for themselves and others</li>
              <li>Protecting private information for themselves and others</li>
              <li>Protecting private information for themselves and others</li>
            </ul>
            <br />
            <p>
              Whilst they are in the classroom, we cannot see what they have got
              on their individual screens unless they choose to share. We
              therefore ask that although the child sits in a quiet space, a
              responsible adult is always close by to monitor their screens from
              time to time.
            </p>
          </div>
        </div>
      </div>
      {/* question2 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv1}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen1 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">What will my child take home after the course?</p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen1 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              After the course finishes, you child will continue to have access
              to the software used. They will also be sent an online certificate
              listing the course they attended and the duration of the course.
              They will also be sent a copy of their project files.
            </p>
          </div>
        </div>
      </div>
      {/* question3 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv2}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen2 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            Do I need to dial a special number on a phone or buy headphones or a
            mic?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen2 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              You do not need to get any specialist equipment or “dial in” with
              a phone. A good internet connection at home should allow your
              child to use the speakers and mic on their device to talk to us.
              If you are concerned, you are very welcome to have a test run with
              us a few days before the start of the class.
            </p>
          </div>
        </div>
      </div>
      {/* question4 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv3}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen3 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            Does my child need to have their video turned on?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen3 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              We recommend having the video on, particularly at the beginning of
              the class, because in a virtual environment, it helps the tutor
              gauge whether they are following along and change their pace and
              style accordingly. We do not record our lessons, and if we ever
              need to, it is a recording of the screen share and not the video
              feed.
            </p>
          </div>
        </div>
      </div>
      {/* question5 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv4}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen4 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            Do we join the virtual classroom at exactly the start of the
            session?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen4 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              We recommend signing in around 10-15 minutes before the start of
              the sessions to meet your tutor and register with them. This will
              be an opportunity for the parent or the student to tell the tutor
              about any concerns or questions. You would be welcome to message
              the tutor privately as well. You can also meet the rest of your
              class virtually and get to know them a bit better before the
              course starts.
            </p>
          </div>
        </div>
      </div>
      {/* question6 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv5}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen5 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            Will there be breaks or is the session 3 hours long with no breaks?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen5 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              We aim to deliver shorter projects, with a 5-10 minute drink/snack
              break after 50-55 minutes of lessons. There will be 2 breaks build
              into the session, a drink break around 10AM and a snack break
              around 11AM, each lasting 5-10 minutes. We won’t disconnect from
              the virtual classroom, but the students will be allowed to leave
              the room.
            </p>
          </div>
        </div>
      </div>
      {/* question7 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv6}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen6 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            Do I need to buy software of subscriptions for the courses?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen6 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              All software and subscriptions are provided to you free of charge,
              as we cover the cost of the licences. Also, for the remainder of
              the break from school, the class participants will continue to
              have access to our software for free.
            </p>
          </div>
        </div>
      </div>
      {/* question8 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv7}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen7 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            We don’t have an iPad or computer at home. Can I hire them from you?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen7 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              Yes you can, if you’re booking for 1 week or longer – hire charge
              is £50 per week per device to cover special delivery shipping and
              insurance with a fully refundable deposit of £200. Contact us via
              email to set this up.
            </p>
          </div>
        </div>
      </div>
      {/* question9 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv8}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen8 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            How involved do I have to be during the day as a parent?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen8 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              Parents are usually not required to actively support children for
              the online courses – although some welcome the opportunity to
              learn coding alongside their children! We will ask parents to
              guide the children through the Zoom set up and controls – this is
              usually 10 to 15 mins at the start before children become familiar
              with Zoom. At the start we will spend some time familiarising
              ourselves with the controls.
            </p>
          </div>
        </div>
      </div>
      {/* question10 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv9}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen9 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">What are the timings of an online mini-camp?</p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen9 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              Our online mini-camp times are different to our in-house camps.
              Our mini-camps are 3 hours long. However, if you feel your child
              could cope with a full day of learning, they can join us for a
              different subject in the afternoon. We have a 2 hour break between
              the morning and afternoon sessions, allowing the students to have
              lunch and some free time at home.
            </p>
            <br />
            <p>We have three sessions running on any given day:</p>
            <br />
            <ul className="list-disc">
              <li>
                9AM to 12PM (this is an ideal time for our younger learners as
                they tend to be most productive in the mornings)
              </li>
              <li>
                2PM to 5PM (this session would offer a different subject to the
                morning session, as our mini-camps are only three hours long,
                giving working from home families lots of flexibility)
              </li>
              <li>
                6PM to 9PM (these classes are ideal for older learners, who
                might be more productive in the evenings, and also for our
                international students in the US)
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      {/* question11 */}
      <div className="p-4 border-t-2">
        <button
          onClick={toggleDiv10}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen10 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">
            What equipment do I need to provide my child with in the online only
            camp?
          </p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen10 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              Your child will need a device to connect with us via a Zoom
              classroom, so at the very least, they will need:
            </p>
            <br />
            <ul className="list-disc">
              <li>
                Pa computer or an iPad with Zoom installed (for most courses,
                either one will work, but some courses may be iPad only or
                Computer only)
              </li>
              <li>
                a quiet space to work, away from background noise or
                distractions (siblings or television/radio)
              </li>
              <li>
                if you have two siblings joining the camp, they will also need
                to be in separate rooms
              </li>
              <li>
                perhaps some writing material to take any notes. Most notes from
                the tutor will be sent to the students at the end of the class
              </li>
            </ul>
            <br />
            <p>The Game Design course is iPad /tablet only.</p>
            <br />
            <p>
              The Virtual Reality course experience is better on a iPad/tablet.
              If you are using a computer, we would recommend having a smart
              phone to view your world.
            </p>
            <br />
            <p>
              Scratch Coding, Roblox Coding, Advanced Game Development, Mobile
              App Development, Python Coding all require a computer.
            </p>
          </div>
        </div>
      </div>
      {/* question12 */}
      <div className="p-4 border-t-2 border-b-2">
        <button
          onClick={toggleDiv11}
          className="flex flex-row items-center hover:text-yellow-400 text-lg font-thin"
        >
          {isOpen11 ? (
            <FaMinusSquare className="text-yellow-400" />
          ) : (
            <FaPlusSquare />
          )}{" "}
          <p className="ml-3">Do all your coaches have DBS checks?</p>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen11 ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-500 mt-5">
            <p>
              Every Code Kids coach who works with our children has an enhanced
              DBS check and has had child safeguarding training. The safety of
              the children in our care is our highest priority. Every camp also
              has at least one adult with paediatric first aid training. We do
              also have excellent staff:pupil ratios.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
