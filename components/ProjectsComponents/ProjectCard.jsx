import React from "react";
import Image from "next/image";
import { FaGithub, FaLink, FaShare } from "react-icons/fa";
const ProjectCard = () => {
  return (
    <div className=" sm:w-80 h-96 w-72   flex flex-col  cursor-pointer group  ">
      <div className=" h-72 object-cover overflow-hidden rounded-t-3xl -z-10 translate-y-0 group-hover:translate-y-48 duration-700 ">
        <Image
          src="/images/qrcode.png"
          className="h-full object-cover"
          alt="Title"
          width={500}
          height={100}
        />
      </div>
      <div className="h-full ">
        <p className="font-mono text-center  "> Project Title</p>

        <div className=" flex justify-center w-full px-6">
          <div className="border-b border-b-gray-900 w-full"></div>
        </div>
      </div>
      <div className="flex w-full  bg-white rounded-b-3xl justify-between items-end p-1 gap-x-2">
        <div className="w-full px-2 flex items-center h-full ">
          <p className="text-black font-mono text-[10px] flex gap-1 items-baseline">
            Status: <div className="animate-pulse w-2 h-2 bg-green-600"></div>
            Deployed
          </p>
        </div>
        <div className="flex w-full justify-start gap-1  py-1">
          <button
            className=" border border-gray-900 hover:bg-black  text-black hover:text-white w-10 p-2 rounded-md  flex justify-center items-center
         shadow-lg shadow-red-0 duration-500
          hover:-translate-y-1 hover:ring-red-200 focus:backdrop-blur-sm 
          "
          >
            <FaLink className="w-5 h-5" />
          </button>
          <a
            className="border border-gray-900 hover:bg-blue-gray-800 text-black hover:text-white p-2 w-10  rounded-md  flex justify-center items-center
         shadow-lg shadow-blue-gray-0 duration-500
          hover:-translate-y-1 hover:ring-blue-200 focus:backdrop-blur-sm 
          "
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <button
            className="hover:bg-red-900 border border-gray-900 text-black hover:text-white w-10 p-2 rounded-md  flex justify-center items-center
         shadow-lg shadow-red-0 duration-500
          hover:-translate-y-1 hover:ring-red-200 focus:backdrop-blur-sm 
          "
          >
            <FaShare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
