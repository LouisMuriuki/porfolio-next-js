import Image from "next/image";
import React from "react";

const Skill = () => {
  return (
    <div id="skills" className="mt-12 w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase font-lato text-[#fff]">
          Skills
        </p>
        <h2 className="py-4 font-lato ">What i can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer  ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/html.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/css.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/sass.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>SCSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/tailwind.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>Tailwind-css</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/material.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>Material-ui</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/javascript.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/react.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/next.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/node.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>Node/Express</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/mongo.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/firebase.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assests/skills/github.png" alt="" width="64px" height="64px" />
              </div>
              <div className="flex flex=col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
