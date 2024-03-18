import React, { useState, useEffect } from "react";
import HeroImage from "../assets/img3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Programmer", "Web Developer"];

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      const currentText = texts[currentTextIndex];
      if (typedText.length < currentText.length) {
        setTypedText(currentText.substring(0, typedText.length + 1));
      } else {
        clearTimeout(typingTimer);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) =>
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
          setTypedText("");
        }, 2000); // Change typing speed by adjusting this timeout
      }
    }, 100); // Change typing speed by adjusting this timeout

    return () => clearTimeout(typingTimer);
  }, [typedText, currentTextIndex, texts]);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white">
          I'm a <br className="my-3"></br>
          {typedText}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am a detail-oriented programmer in C++ 
          also an enthusiastic learner of Data structures and Algorithms <br></br>
           and a Web developer.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
