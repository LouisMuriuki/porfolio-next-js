import React, { useEffect } from "react";
import Image from "next/image";
import Lui from "../public/assests/lui.jpg"
const About = () => {
  useEffect(() => {
    const image = document.getElementById("image");
    const text = document.getElementById("text");
    window.addEventListener("scroll", () => {
      let offsetY = window.scrollY;
    });

    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);
  return (
    <div id="about" className="w-full h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl font-lato tracking-widest text-[#fff]">
            About
          </p>
          <h2 className="py-4 font-lato">Who i Am</h2>
          <div className="flex flex-col md:flex-row gap-x-8 ">
            <div id="image" className="pt-6 rounded-xl">
              <Image
                id="luiimage"
                className="pt-0 md:pt-20 xl:pt-40   rounded-xl hover:scale-110 ease-in duration-300 hover:rounded-xl cursor-pointer "
                src={Lui}
                alt="Lui"

              />
            </div>
            <div id="text" className="flex flex-col z-10 rounded-xl h-max hover:shadow-md overflow-hidden shadow-teal-900">
              <p className="py-2 z-10 text-xs md:text-sm lg:text-base font-poppins text-[#fff]">
                Hi there👋, My name is <span className="text-[#08d1d1] text-sm md:text-lg font-kalam">Louis Muriuki Hugo</span> and I am a full-stack JavaScript developer with a focus on building intuitive,
                user-friendly web applications. I have a strong foundation in React,
                and have experience using Next.js to build server-rendered applications and React Native to build cross-platform mobile apps.
              </p>
              <p className="py-2 z-10 text-xs md:text-base font-poppins text-[#fff]">
                I have a passion for clean, efficient code and enjoy the process of turning complex problems into simple, elegant solutions.
                I am comfortable working on both front-end and back-end projects, and have experience with technologies such as Node.js, Express, and MongoDB.
              </p>
              <p className="py-2 z-10 text-xs md:text-base font-poppins  text-[#fff]">
                In my free time, I enjoy staying active and exploring the great outdoors. I love going on hikes and swims, and also enjoy hitting the gym to stay fit.
                I also enjoy staying up to date with the latest developments in the tech industry and am always looking for opportunities to learn and grow
              </p>
              <p className="py-2 z-10 text-xs md:text-base font-poppins  text-[#fff]">
                I am a reliable and detail-oriented developer who takes pride in delivering high-quality work on time.
                I am always eager to take on new challenges and excited to see how I can contribute to your project.
                Thank you for considering my skills and experience. I look forward to the opportunity to work with you and bring your vision to life.
              </p>
              <p className="py-2 text-xs md:text-base font-poppins text-[#fff] underline cursor-pointer"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
