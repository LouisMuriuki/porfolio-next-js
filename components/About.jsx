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
      window.removeEventListener("scroll", () => {});
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
            <div id="image" className="p-2 rounded-xl hover:shadow-md shadow-teal-900">
              <Image
              id="luiimage"
                className="rounded-xl hover:scale-110 ease-in duration-300 hover:rounded-xl cursor-pointer"
                src={Lui}
                alt="Lui"
                width="500px"
                height="500px"
              />
            </div>
            <div id="text" className="flex flex-col">
              <p className="py-2 text-md font-poppins text-[#fff]">
                Hello, my name is Louis Muriuki. I am a self-taught Web and
                Mobile developer.
              </p>
              <p className="py-2 text-md font-poppins text-[#fff]">
                I enjoy build interactive applications and spend most of my time
                writing code.
                <br />I love building applications from scratch as that exposes
                me to challenges that eventually turn out to be learning
                opportunities.
              </p>
              <p className="py-2 text-md font-poppins  text-[#fff]">
                I love learning new technolgies as that gives me more skills and
                "muscles" to flex while building my next application{" "}
              </p>
              <p className="py-2 text-md font-poppins text-[#fff] underline cursor-pointer"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
