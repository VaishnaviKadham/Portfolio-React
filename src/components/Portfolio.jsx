import React from "react";
import { Link } from "react-scroll";
import arrayDestruct from "../assets/portfolio/chatapp.png";
import installNode from "../assets/portfolio/weather.png";
import navbar from "../assets/portfolio/ecommerce.png";
import reactParallax from "../assets/portfolio/travel.png";
import reactSmooth from "../assets/portfolio/codeEditor.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      title:"tilte 1",
      demo:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      code:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      description:"It is a real time chat application where users can login and send messages and delete it.",
    },
    {
      id: 2,
      src: reactParallax,
      title:"tilte 2",
      demo:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      code:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      description:"It is a Travel website where it contains different sections Home, Gallery, Blog, About, Contact.",
    },
    {
      id: 3,
      src: navbar,
      title:"tilte 3",
      demo:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      code:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      description:"It is a Ecommerce Website contains Home, About, Craft, Testimonials, Blog sections.",
    },
    {
      id: 4,
      src: reactSmooth,
      title:"tilte 4",
      demo:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      code:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      description:"A Code editor where code is written, it can be run and gives output in light and dark modes."
    },
    {
      id: 5,
      src: installNode,
      title:"tilte 5",
      demo:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      code:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      description:"The weather of place is known if location is accessed the windSpeed, humidity, clouds can be shown.",
    },
    {
      id: 6,
      src: reactWeather,
      title:"tilte 6",
      demo:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      code:"https://github.com/VaishnaviKadham/REAL-TIME-CHAT-APPLICATION",
      description:"The weather of place is known if location is accessed the windSpeed, humidity, clouds can be shown.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <div className="mr-10 mt-3"> {/* Adjust margin to create space */}
                    <a
                    href={demo} // Use the provided demo link
                    className="group text-white px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm hover:scale-110"
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security best practice for opening links in new tabs
                  >
                    Demo
                  </a>
                </div>
              <div className="ml-10 mt-3"> {/* Add margin to create space */}
              <a
                    href={code} // Use the provided demo link
                    className="group text-white px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm hover:scale-110"
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security best practice for opening links in new tabs
                  >
                    Code
                  </a>
              </div>
              </div>


              <div className="p-4">
                <h2 className="text-center font-semibold">Description</h2>
                <p className="text-center">{description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
