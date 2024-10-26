import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Lui from "../public/assests/about.jpeg";
import { slideAnimation } from "../config/motion";
import { AiOutlineMail } from "react-icons/ai";
import HideContext from "../context/HideContext";
import { useRouter } from "next/router";
const About = () => {
  const router = useRouter();
  const { hide, setHide } = useContext(HideContext);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const [width, setWidth] = React.useState();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const hideRest = () => {
    setHide((prev) => !prev);
  };
  return (
    <AnimatePresence>
      <div ref={ref} className="mb-28 md:mb-0">
        <div
          id="about"
          className="w-full h-screen p-2 flex items-center pb-10 md:pb-0 py-8 md:py-20 "
        >
          <div className="max-w-[1240px] m-auto md:grid-cols-2 gap-8 ">
            <p className="uppercase text-xl md:text-2xl font-lato tracking-widest text-[#fff]">
              About
            </p>
            <h2 className="py-1 font-lato text-sm underline">Who i Am</h2>
            <div className="flex flex-col md:flex-row gap-x-8 ">
              <div
                id="text"
                className="md:mt-16 items-center justify-center flex flex-col md:max-w-[60%] rounded-xl h-max"
              >
                <p className="py-2 z-10 text-xs md:text-base lg:text-base font-poppins text-[#fff]">
                  Hi there👋, I'm{" "}
                  <span className="text-[#08d1d1] text-xs md:text-base lg:text-base font-fuzzy-bubbles">
                    Louis Muriuki Hugo
                  </span>{" "}
                  a software developer based in Nairobi, Kenya, with 4 years of
                  experience shipping production-ready code. My expertise spans
                  the TypeScript/JavaScript ecosystem, where I build mobile
                  apps using React-Native/Expo, web applications using React
                  and NextJS, and spin up servers with NodeJS. I have been
                  playing around with rust for sometime now and can build
                  useful applications.
                  {isMobile && hide ? (
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
                    <p className=" py-2 z-10 text-xs md:text-base font-poppins  text-[#fff]">
                      I'm familiar with most ways to deploy applications,
                      including setting up CI/CD pipelines, setting up bare
                      servers with various tools like Nginx, running EC2
                      instances, using docker etc. My experience has shaped me
                      into a dedicated professional, excelling both as an
                      individual contributor and as a collaborative team player. 
                      Lets build the future
                     
                      {isMobile && (
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
                  className="hover:scale-105 hover:shadow-xl ease-in duration-300 flex mt-8 rounded-full py-3 px-8 items-center text-slate-100"
                >
                  Hire me
                  <AiOutlineMail size={14} className="ml-2 mt-[2px]" />
                </button>
                <p className="py-2 text-xs md:text-base font-poppins text-[#fff] underline cursor-pointer"></p>
              </div>
              <motion.div
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
