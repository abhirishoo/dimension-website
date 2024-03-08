import React from "react";
import pic3 from "/dimensions-removebg-preview.png";

function About() {
  return (
    <div className="W-full lg:py-20 py-10 px-[4.5vw] bg-[#CDEA68]  rounded-t-3xl">
      <h1 className="lg:text-[2.5vw] text-sm lg:leading-[3vw] lg:tracking-tight">
      I'm a web developer with a focus on the MERN stack, <br />but still exploring other technologies and frameworks that catch my interest! <br />If you're looking for a developer to add to your team, I'd love to hear from you!
      </h1>

      <div className=" textpart text-sm  lg:text-lg lg:flex lg:justify-between mt-[3vw]   border-y	 border-black  pt-[1.5vw] pb-[4vw]">
        <p >What you can expect:</p> <br />
        <p> 
          Top-notch expertise in JavaScript, React.js, TypeScript,
          <br /> Node.js, and DevOps with Docker,Kubernetes, and AWS.
          <br /> I specialize in crafting robust solutions and databases
          <br />  like MySQL, MongoDB, and PostgreSQL. 
          <br />
          <br />  
            I think the combination of strategy and design,
          with a touch of coffee, <br />  
          is what ensures your message is coherent, persuasive
           , and engaging.
        </p>
        <p>
          <br />
          <div className="flex justify-between  lg:flex-col lg:mx-20">

         <p className="flex justify-between mr-1 lg:gap-1 "><span><a className="hover:text-slate-800" target="_blank" href="https://instagram.com/abhijeet_rishoo?utm_source=hoobe&utm_medium=social">Instagram </a>  </span>  <span><img className="w-4 my-1.5" src="/insta-removebg-preview.png" alt="" /></span>  </p>
         <p className="flex justify-between  lg:gap-1"><span><a className="hover:text-slate-800" target="_blank" href="https://twitter.com/abhi_rishoo?utm_source=hoobe&utm_medium=social">X(Twitter) </a>  </span>  <span><img className="w-6 my-1.5" src="/X-removebg-preview.png" alt="" /></span>  </p>
         <p className="flex justify-between  lg:gap-1"><span><a className="hover:text-slate-800" target="_blank" href="https://t.snapchat.com/korpgzi5?utm_source=hoobe&utm_medium=social">Snapchat </a>  </span>  <span><img className="w-6 " src="/snapchat-removebg-preview.png" alt="" /></span>  </p>
         <p className="flex justify-between  lg:gap-1"><span><a className="hover:text-slate-800" target="_blank" href="https://linkedin.com/in/abhirishoo/?utm_source=hoobe&utm_medium=social">Linkdin </a>  </span>  <span><img className="w-6 " src="/linkdin-removebg-preview.png" alt="" /></span>  </p>

          </div>  
        </p>
      </div>
      <div className="w-full flex gap-10 pt-[2vw] pb=[2vw] ">
        <div className="w-1/2">
          <button className=" group flex hover:bg-black  gap-[1vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white">
          <a target="_blank" href="https://github.com/abhirishoo/"> GitHub </a>
            <div className=" group-hover:scale-150  rounded-full bg-white ml-4 w-[0.8vw] h-[0.8vw]"></div>
          </button> 
          <button className=" group flex hover:bg-black  gap-[1vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white">
          <a target="_blank" href="https://leetcode.com/abhi_rishoo1912/">LeetCode</a> 
            <div className=" group-hover:scale-150  rounded-full bg-white w-[0.8vw] h-[0.8vw]"></div>
          </button>
        </div>
        <div className="w-[10rem] ml-[25vw] ">
          <img className="w-full h-full" src={pic3} alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
