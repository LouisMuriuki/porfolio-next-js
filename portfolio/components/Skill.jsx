import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Typescript from "../public/assests/skills/typescript.png";
import Reactnative from "../public/assests/skills/reactnative.png";
import Antdesign from "../public/assests/skills/antdesign.png";
import Storybook from "../public/assests/skills/storybook.png";
import Tailwind from "../public/assests/skills/tailwind.png";
import Javascript from "../public/assests/skills/javascript.png";
import Reactjs from "../public/assests/skills/react.png";
import Next from "../public/assests/skills/next.png";
import Node from "../public/assests/skills/node.png";
import Mongo from "../public/assests/skills/mongo.png";
import Firebase from "../public/assests/skills/firebase.png";
import Github from "../public/assests/skills/github.png";
import HideContext from "../context/HideContext";
import { Particles } from "./Particles";
const Skill = () => {
  const { hide, setHide } = useContext(HideContext);
  const [width, setWidth] = useState();
  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [width, setWidth]);
  return (
    <div id="skills" className={`md:mt-14 w-full h-fit  p-2 `}>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <Particles className="absolute inset-0 -z-10 " />
        <p className="text-xl md:text-2xl  tracking-widest uppercase font-lato text-[#fff]">
          Skills
        </p>
        <h2 className="py-4 font-lato text-sm underline ">What i can do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Javascript}
                  alt="Javascript"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>{" "}
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Typescript}
                  alt="Typescript"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  alt="Tailwind CSS"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Tailwind-css</h3>
              </div>
            </div>
          </div>
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Reactjs}
                  alt="REact Native"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>React Native</h3>
              </div>
            </div>
          </div>
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Reactjs}
                  alt="React JS"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Next}
                  alt="Next JS"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Node}
                  alt="Node JS"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Node/Express</h3>
              </div>
            </div>
          </div>
          <div className="p-1 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Mongo}
                  alt="MongoDB"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
          <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Firebase}
                  alt="Firebase"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Github}
                  alt="Github"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Antdesign}
                  alt="AntDesign"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
                />
              </div>
              <div className="flex text-xs md:text-base flex=col items-center justify-center">
                <h3>Ant Design</h3>
              </div>
            </div>
          </div>
          <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 cursor-pointer ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Storybook}
                  alt="Storybook"
                  width={width < 768 ? "48px" : "64px"}
                  height={width < 768 ? "48px" : "64px"}
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
