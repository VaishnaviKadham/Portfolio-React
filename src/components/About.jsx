import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
         I'm Vaishnavi from Hyderabad, a 3rd year Computer Science Student from CMR TECHNICAL CAMPUS.
         My interest lies in solving problems .
         I'm an enthusiactic learner of data structures and algorithms.
         I also learned web development and made some of the real world projects. 
        </p>

        <br />

        <p className="text-xl">
          I have also been an organizer for the coding club at my college,
          conducted Hackathons, Gaming competitions, Quizzes, Coding events, etc.
          I'm a Self Motivated and a Passionate learner.
          Solving problems everyday helps me to think in different directions which helps me to grow!  
        </p>
      </div>
    </div>
  );
};

export default About;
