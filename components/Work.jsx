import { AnimatePresence} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { workDetails } from "../config/db";
import Lottie from "lottie-react";
import animationData from "../public/assests/lottie/dev.json";
import { isMobile } from "react-device-detect";
import { HiDocumentDownload } from "react-icons/hi";
const Work = () => {
  const ref = useRef(null);
  const [selectedId, setSelectedId] = useState(0);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const getTextColor = (id) => {
    const color = selectedId === id ? "text-white" : "text-slate-400";
    return color;
  };

  // const getTextBackgroundColor = (id) => {
  //   const color = selectedId === id ? "bg-white" : "bg-slate-400";
  //   return color;
  // };
  
  const getIndicatorBackgroundColor = (id) => {
    const color = selectedId === id ? "bg-[#05a1a1]" : "bg-slate-400";
    return color;
  };
  return (
    <AnimatePresence>
      <div ref={ref}>
        <div
          id="work"
          className="w-full mx-auto h-screen p-2 flex pb-8 md:pb-16 "
        >
          <div className="max-w-[1240px] mx-auto flex flex-col">
            <div className="flex flex-col items-start justify-start">
              <p className="uppercase text-xl md:text-2xl font-lato tracking-widest text-[#fff]">
                Work
              </p>
              <h2 className="py-1font-lato text-sm underline">
                Where I've worked
              </h2>
            </div>
            <div className="flex flex-row w-[100%]  mt-10 md:mt-16">
              {isClient && isMobile ? null : (
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
              )}

              <div
                className={`flex flex-col  ${
                  isClient && isMobile ? "mr-3" : "mr-10"
                }`}
              >
                {workDetails.map((details, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        height: "50px",
                        width: "2px",
                        paddingLeft: selectedId === i && "1px",
                        paddingRight: selectedId === i && "1px",
                      }}
                      className={getIndicatorBackgroundColor(i)}
                    ></div>
                  );
                })}
              </div>

              <div
                className={`flex flex-col ${
                  isClient && isMobile ? "w-1/8 mr-8" : " w-1/5"
                }`}
              >
                {workDetails.map((details, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex mb-8 flex-col
                      }`}
                    >
                      <span
                        onClick={() => setSelectedId(i)}
                        className={`  ${getTextColor(
                          details.id
                        )} text-left cursor-pointer`}
                      >
                        {details.company}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div
                className={`flex flex-col ${
                  isClient && isMobile ? "w-fit" : "w-1/3"
                } mt-[-5px]`}
              >
                {workDetails.map((details, i) => {
                  return selectedId === details.id ? (
                    <div
                      key={i}
                      className={`flex flex-col w-auto  ${getTextColor(
                        details.id
                      )}`}
                    >
                      <div className="ml-0 md:ml-[-20px] mb-5">
                        <h3
                          className={`${
                            isClient && isMobile ? "text-sm" : "text-base"
                          }  md:text-lg font-semibold underline mb-2`}
                        >
                          {details.title}
                        </h3>
                        <p className="text-xs text-slate-300 mb-1">
                          {details.location}
                        </p>
                        <p className="text-xs text-slate-300 mb-1">
                          {details.from}
                        </p>
                      </div>
                      <div className="">
                        {details.responsibility.map((duty, i) => {
                          return (
                            <ul key={i}>
                              <li
                                className={` ${
                                  isClient && isMobile ? "text-xs" : "text-sm"
                                } mb-2 font-lato text-slate-200`}
                              >
                                {duty}
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a href="/api/downloadcv" download={"Lui's CV.docx"}>
                <button className="hover:scale-105 hover:shadow-xl ease-in duration-300 flex mt-8 rounded-full py-3 px-8 items-center  text-slate-100">
                  <HiDocumentDownload
                    size={isClient && isMobile ? 14 : 18}
                    className="ml-2 mt-[2px]"
                  />
                  <p
                    className={`${
                      isClient && isMobile ? "text-sm" : "text-base"
                    }`}
                  >
                    Download my CV
                  </p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Work;
