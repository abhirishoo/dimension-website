import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div
      className=" fixed  z-[999] w-full lg:px-[4.5vw] px-[6.5vw] py-5  flex justify-between items-center  
      backdrop-blur  bg-transparent "
    >
      <div className="logo">
        <img className="w-12 h-12 " src="/dimensions-removebg-preview.png" alt="" />
      </div>

      <div className="links flex gap-5">
        {[  "About", "Works", "Insights", "Contact Me"].map(
          (item, index) => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              key={index}
              className={`lg:text-[1.2vw] text-[3vw] text-white capitalize cursor-pointer font-normal ${
                index === 3 && "lg:ml-20"
              }`}
              >
              {item}
            </motion.a>
          )
          
          )}
          <span  style={{boxShadow:'0 0 0.45em #00FF19'} }className='inline-block cursor-pointer lg:-mx-3 -mx-4 lg:px-2  lg:my-3.5 my-2   w-1 h-1 bg-green-400 rounded-full'></span>
      </div>
    </div>
  );
};

export default Navbar;
