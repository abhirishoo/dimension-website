import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.20"
      className="w-full lg:h-screen  bg-[#161618] pt-1"
    >
      <div className="textHead text-white select-none font-semibold text-center text-[35vw] my-7 lg:-my-[7rem] ">
          work  
      </div>
      <div className="border-t-[1px] border-zinc-700 font-semibold text-white flex justify-between items-center  px-[4.5vw]">
        {[
         
         <a target="_blank" href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=abhi.rishoo2003@gmail.com&hl=en">  <span className="flex"><img className="w-[4%] h-[4%] flex mr-1" src="/Gmail.png" alt="" /> abhi.rishoo2003@gmail.com </span> </a> ,
          <span className="-mx-[25vw]"> Full Stack Developer </span>,
        ].map((item, index) => (
          <p className="lg:text-lg text-[60%] font-normal  tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex my-5  items-center lg:gap-4  ">
          <div className="group hover:bg-white  lg:px-[0.5vw] lg:py-[0.3vw] border-[1.5px] border-white   rounded-full">
            <a target="_blank" href="https://abhijeetrishoo-portfolio.vercel.app/assets/_resume.pdf"> <div className="group-hover:text-black px-2 text-xs  lg:text-lg font-semibold"> Resume </div> </a>
          </div>
          <div className=" group ml-2 lg:ml-0 hover:bg-white lg:w-[2.4vw] lg:h-[2.4vw] flex items-center justify-center  border-[1.5px]  border-white rounded-full">
            <span className=" group-hover:text-black  rotate-[45deg]  ">
            <a target="_blank" href="https://github.com/abhirishoo/">  <FaArrowUpLong /> </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
