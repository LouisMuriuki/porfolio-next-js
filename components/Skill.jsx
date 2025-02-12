import Image from "next/image";
import React from "react";
import Typescript from "../public/assests/skills/typescript.png";
import Antdesign from "../public/assests/skills/antdesign.png";
import Storybook from "../public/assests/skills/storybook.png";
import Tailwind from "../public/assests/skills/tailwind.png";
import Reactjs from "../public/assests/skills/react.png";
import Next from "../public/assests/skills/next.png";
import Node from "../public/assests/skills/node.png";
import Mongo from "../public/assests/skills/mongo.png";
import Firebase from "../public/assests/skills/firebase.png";
import Github from "../public/assests/skills/github.png";
import Rust from "../public/assests/skills/rust.png";
import { isMobile } from "react-device-detect";
import { Particles } from "./Reusables/Particles";
const Skill = () => {
  return (
    <div id="skills" className="flex p-2 py-10 md:py-20">
      <div className="max-w-[1232px] mx-auto flex flex-col justify-center">
        <Particles className="absolute inset-0 -z-10 " />
        <p className="py-1 text-xl md:text-2xl  tracking-widest uppercase font-lato text-[#fff]">
          Skills
        </p>
        <h2 className="font-lato text-sm underline mb-3">What is my stack</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10 md:mt-10">
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Reactjs}
                  alt="React Native"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>React Native</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Typescript}
                  alt="Typescript"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Rust}
                  alt="Rust"
                  className="rounded-xl"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Rust</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Reactjs}
                  alt="React JS"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Node}
                  alt="Node JS"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Node/Express</h3>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Next}
                  alt="Next JS"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Mongo}
                  alt="MongoDB"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Firebase}
                  alt="Firebase"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Github}
                  alt="Github"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Antdesign}
                  alt="AntDesign"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Ant Design</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  alt="Tailwind CSS"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Tailwind-css</h3>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#17153B] md:p-6 hover:shadow-2xl shadow-sm rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Storybook}
                  alt="Storybook"
                  className="rounded-xl"
                  width={isMobile ? 32 : 54}
                  height={isMobile ? 32 : 54}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>StoryBook</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
