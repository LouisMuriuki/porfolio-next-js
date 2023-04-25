import Image from "next/image";
import React, { useContext } from "react";
import Html from "../public/assests/skills/html.png"
import Css from "../public/assests/skills/css.png"
import Sass from "../public/assests/skills/sass.png"
import Tailwind from "../public/assests/skills/tailwind.png"
import Material from "../public/assests/skills/material.png"
import Javascript from "../public/assests/skills/javascript.png"
import Reactjs from "../public/assests/skills/react.png"
import Next from "../public/assests/skills/next.png"
import Node from "../public/assests/skills/node.png"
import Mongo from "../public/assests/skills/mongo.png"
import Firebase from "../public/assests/skills/firebase.png"
import Github from "../public/assests/skills/github.png"
import HideContext from "../context/HideContext";
const Skill = () => {
  const {hide,setHide}=useContext(HideContext)


  return (
    <div id="skills" className={`${hide?"mt-1":"mt-20"} md:mt-14 w-full h-fit  p-2 `}>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase font-lato text-[#fff]">
          Skills
        </p>
        <h2 className="py-4 font-lato ">What i can do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer  ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Sass} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>SCSS</h3>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Tailwind-css</h3>
              </div>
            </div>
          </div>
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Material} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Material-ui</h3>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Reactjs} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Next} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Node/Express</h3>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>

          <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} alt="" width="64px" height="64px" />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
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
