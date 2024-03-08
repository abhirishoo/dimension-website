import React from "react";

function Footer() {
  return (
    <div className="w-full h-full  flex gap-[15vw] py-[5vw]  px-[4vw] bg-[#f1f1f1]">
      <div className="w-1\2 h-full flex flex-col justify-between ">
        <div className="heading text-[6.5vw] ">
          <h1 className="  tracking-tighter font-bold leading-none -mb-[1vw]">
            Abhijeet 
          </h1>
          <h1 className=" tracking-tighter font-bold leading-none -mb-[1vw] ">
            Rishoo
          </h1>
        </div>
       
      </div>

      <div className="w-1\2">
        <h1 className=" text-[5.5vw] tracking-tighter font-bold leading-none ">
         OPEN FOR WORK!
        </h1>
        <br />
        <div> <span className="font-semibold text-xl">SKILLS </span> <div >
        ● Frontend - JavaScript , React Js , TypeScript , Nextjs13 <br />
        ● Backend - Node.js , Express.js ,TypeScript <br />
        ● DevOps - Docker , Kubernetes , AWS <br />
        ● Database - mySql , MongoDB , PostgreSQL <br /></div>
        </div><br />
        <div><span className="font-semibold text-xl">EDUCATION </span> <br />
            Kalinga Institute of Industrial Technology <span className="ml-[10vw] text-slate-600"> August 2021 - August 2025 </span> <br />
            Electronics and Telecommunication | CGPA -8.26 <span className="ml-[11.8vw] text-slate-600"> Bhubaneswar,IN </span> <br />
           
            </div>
      
      </div>
    </div>
  );
}
export default Footer;
