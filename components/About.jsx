import React, { useContext, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import { AiOutlineMail } from "react-icons/ai";
import HideContext from "../context/HideContext";
import useScreenSize from "../hooks/useScreenSize";
const About = () => {
  const { hide, setHide } = useContext(HideContext);
  const ref = useRef(null);
  const { mobile } = useScreenSize();

  const hideRest = () => {
    setHide((prev) => !prev);
  };
  return (
    <AnimatePresence>
      <div ref={ref}>
        <div id="about" className="w-full p-2 flex items-center py-10">
          <div className="max-w-[1240px] m-auto ">
            <p className="uppercase text-xl md:text-2xl font-lato tracking-widest text-[#fff]">
              About
            </p>
            <h2 className="py-1 font-lato text-sm underline">Who i Am</h2>
            <div className="flex flex-col md:flex-row gap-x-8 ">
              <div
                id="text"
                className="mt-10 items-center justify-center flex flex-col rounded-xl h-max"
              >
                <p className="py-2 z-10 text-base md:text-lg font-poppins text-[#e9e9e9]">
                  Hi there👋, I'm{" "}
                  <span className="text-base md:text-lg font-fuzzy-bubbles text-[#08d1d1]">
                    Louis Muriuki Hugo
                  </span>{" "}
                  I'm a software developer based in Nairobi, Kenya, with five
                  years of experience delivering production-ready code. My
                  expertise lies in the Mobile and Web ecosystem, where I build
                  mobile applications using Kotlin and React Native/Expo,
                  develop web applications with React and Next.js, and set up
                  backend services with Node.js.
                  {mobile && hide ? (
                    <span
                      onClick={hideRest}
                      className="text-[#08d1d1] ml-2 text-sm font-kalam "
                    >
                      readmore
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                {hide ? (
                  ""
                ) : (
                  <>
                    <p className=" py-2 z-10 text-base md:text-lg font-poppins text-[#e9e9e9]">
                      Beyond the norm, I've been exploring Rust and can build
                      practical applications with it. I'm well-versed in
                      deploying applications, whether through CI/CD pipelines,
                      configuring bare-metal servers with Nginx, managing EC2
                      instances, or containerizing services with Docker. With a
                      strong foundation in both individual and collaborative
                      work, I thrive in fast-paced environments, solving complex
                      problems and shipping high-quality software. Let’s build
                      the future!
                      {mobile && (
                        <span
                          onClick={hideRest}
                          className="text-[#08d1d1] ml-2 text-sm font-kalam "
                        >
                          show less
                        </span>
                      )}
                    </p>
                  </>
                )}
                <button
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=luihugo247@gmail.com",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="hover:scale-105 hover:shadow-xl ease-in duration-300 flex mt-12 rounded-full py-2 md:py-3 px-12 items-center text-slate-100"
                >
                  Hire me
                  <AiOutlineMail size={14} className="ml-2 mt-[2px]" />
                </button>
                <p className="py-2 text-base font-poptext-lg text-[#fff] underline cursor-pointer"></p>
              </div>
              {/* <motion.div
                style={isInView ? { ...slideAnimation("left") } : null}
                id="image"
                className="col-span-1 pt-6 w-full md:w-auto h-auto md:h-full  hover:rounded-xl"
              >
                <Image
                  id="luiimage"
                  className="pt-0 md:pt-20 xl:pt-0 object-contain rounded-xl hover:scale-105 ease-in duration-300 hover:rounded-xl cursor-pointer "
                  src={Lui}
                  alt="Lui"
                />
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
