import React from "react";
import Image from "next/image"

const About = () => {
  return (
    <div id="about" className="w-full h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid-cols-3 gap-8 ">
        <div className="col-span-2">
            <p className="uppercase text-xl font-lato tracking-widest text-[#fff]">About</p>
            <h2 className="py-4 font-lato">Who i Am</h2>
            <p className="py-2 text-md font-poppins text-[#fff]">Hello, my name is Louis Muriuki. I am a self-taught Web and Mobile developer.</p>
            <p className="py-2 text-md font-poppins text-[#fff]">I enjoy build interactive applications and spend most of my time writing code.<br/>I love building applications from scratch as that exposes me to challenges that eventually turn out to be learning opportunities.</p>
            <p className="py-2 text-md font-poppins  text-[#fff]">I love learning new technolgies as that gives me more skills and "muscles" to flex while building my next application </p>
            <p className="py-2 text-md font-poppins text-[#fff] underline cursor-pointer"></p>
        </div>
        <div className="w-full h-auto shadow-md shadow-teal-900 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 cursor-pointer mb-5">
            <Image className="rounded-xl hover:scale-110 ease-in duration-300 " src="/../public/assests/lui.jpg" alt="/"width="500px" height="500px"/>
        </div>
      </div>
    </div>
  );
};

export default About;
