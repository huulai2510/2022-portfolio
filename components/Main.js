import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="mnax-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING LEGENDARY TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            I'm <span className="text-[#5651e5]">Lai</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications while learning back-end
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-500">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-500">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-500">
              <AiFillMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-500">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
