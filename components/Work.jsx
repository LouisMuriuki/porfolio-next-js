import { AnimatePresence, motion, useInView } from "framer-motion";
import { slideAnimation } from "../config/motion";
import React, { useRef, useState } from "react";
import { workDetails } from "../config/db";
import Lottie from "lottie-react";
import animationData from "../public/assests/lottie/dev.json";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selectedId, setSelectedId] = useState(0);
  const getTextColor = (id) => {
    const color = selectedId === id ? "text-white" : "text-slate-400";
    return color;
  };
  const getTextBackgroundColor = (id) => {
    const color = selectedId === id ? "bg-white" : "bg-slate-400";
    return color;
  };
  return (
    <AnimatePresence>
      <div ref={ref}>
        <div id="work" className="w-full h-screen p-2 flex py-16 ">
          <div className="min-w-[1240px] m-10 md:m-24">
            <div className="flex flex-col items-start justify-start">
              <p className="uppercase text-xl md:text-2xl font-lato tracking-widest text-[#fff]">
                Work
              </p>
              <h2 className="py-4 font-lato text-sm underline">
                Where I've worked
              </h2>
            </div>
            <div className="flex flex-row w-[100%]  mt-10 md:mt-16">
              <div className="flex flex-col w-1/3 mr-20 ">
                <Lottie
                  draggable="true"
                  style={{ width: "400px" }}
                  animationData={animationData}
                  className="flex justify-center items-center mt-10"
                  loop={true}
                />
                {/* {workDetails.map((details, i) => {
                  return selectedId === details.id
                    ? details.companyDetails.map((info, i) => {
                        return (
                          <div>
                            <Image
                              src={info.logo}
                              width={200}
                              height={200}
                              style={{resizeMode:"contain",}}
                              alt={details.company}
                            />
                          </div>
                        );
                      })
                    : null;
                })} */}
              </div>

              <div className="flex flex-col mr-10">
                {workDetails.map((details, i) => {
                  return (
                    <div
                      style={{
                        height: "44px",
                        width: "2px",
                        paddingLeft: selectedId === i && "1px",
                        paddingRight: selectedId === i && "1px",
                      }}
                      className={getTextBackgroundColor(i)}
                    ></div>
                  );
                })}
              </div>

              <div className="flex flex-col w-1/5">
                {workDetails.map((details, i) => {
                  return (
                    <div className="flex flex-col mb-8">
                      <span
                        onClick={() => setSelectedId(i)}
                        className={`${getTextColor(
                          details.id
                        )} text-sm text-left cursor-pointer`}
                      >
                        {details.company}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col w-1/3 mt-[-5px]">
                {workDetails.map((details, i) => {
                  return selectedId === details.id ? (
                    <div
                      className={`flex flex-col w-auto  ${getTextColor(
                        details.id
                      )}`}
                    >
                      <div className="ml-[-20px] mb-5">
                        <h3 className="text-base md:text-lg font-semibold underline mb-2">
                          {details.title}
                        </h3>
                        <p className="text-xs text-slate-300 mb-1">{details.location}</p>
                        <p className="text-xs text-slate-300 mb-1">{details.from}</p>
                      </div>
                      <div className="">
                        {details.responsibility.map((duty, i) => {
                          return (
                            <ul>
                              <li className="mb-2 text-slate-200">{duty}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Work;
