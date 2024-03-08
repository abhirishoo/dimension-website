import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speeed=".2"
      className="w-full lg:pt-20 py-15 lg:rounded-t-3xl bg-[#004D43] text-white"
    >
      <div className="movingText border-t-2 border-b-2  border-zinc-900 lg:border-zinc-300  flex overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[17.5vw]  leading-none font-[fantasy] pr-20 lg:pt-10 pt-5 -mb-[0vw] "
        >
        Hey I'm Abhi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[17.5vw] leading-none font-[fantasy] pr-20 lg:pt-10 pt-5 -mb-[0vw] "
        >
         Hey I'm Abhi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
