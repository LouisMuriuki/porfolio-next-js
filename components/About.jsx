import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Lui from "../public/assests/lui.jpg";
import { slideAnimation } from "../config/motion";
import { AiOutlineMail } from "react-icons/ai";
import HideContext from "../context/HideContext";
import { useRouter } from "next/router";
const About = () => {
  const router=useRouter()
  const { hide, setHide } = useContext(HideContext);
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
      <div ref={ref}>
        <div
          id="about"
          className="w-full h-screen p-2 flex items-center py-8 md:py-16 "
        >
          <div className="max-w-[1240px] m-auto md:grid-cols-2 gap-8 ">
            <p className="uppercase text-xl md:text-2xl font-lato tracking-widest text-[#fff]">
              About
            </p>
            <h2 className="py-4 font-lato text-sm underline">Who i Am</h2>
            <div className="flex flex-col md:flex-row gap-x-8 ">
              <motion.div
                style={isInView ? { ...slideAnimation("left") } : null}
                id="image"
                className="col-span-1 pt-6 w-full md:w-auto h-auto md:h-full  hover:rounded-xl"
              >
                <Image
                  id="luiimage"
                  className="w-full pt-0 md:pt-20 xl:pt-0 object-contain rounded-xl hover:scale-105 ease-in duration-300 hover:rounded-xl cursor-pointer "
                  src={Lui}
                  alt="Lui"
                />
              </motion.div>
              <div
                id="text"
                className="md:mt-20 pt-2 items-center justify-center col-span-1 flex flex-col z-10 rounded-xl h-max hover:shadow-md overflow-hidden shadow-teal-900"
              >
                <p className="py-2 z-10 text-xs md:text-sm lg:text-base font-poppins text-[#fff]">
                  Hi there👋, I'm{" "}
                  <span className="text-[#08d1d1] text-sm md:text-lg font-fuzzy-bubbles">
                    Louis Muriuki Hugo
                  </span>{" "}
                  a FullStack developer specialized in crafting intuitive and
                  user-friendly web and mobile applications. My expertise lies
                  in React.js for the front-end, Node.js for the backend, and
                  React Native for cross-platform mobile app development.
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
                      I am a reliable and detail-oriented developer who takes
                      pride in delivering high-quality work on time. I am always
                      eager to take on new challenges and am excited to see how
                      I can contribute to your project.
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
                )}{" "}
                <button
                  onClick={() => router.push("mailto:luihugo247@gmail.com")}
                  className="hover:scale-105 ease-in duration-300 flex mt-8 rounded-full py-3 px-8 items-center  text-slate-100"
                >
                  Ping me
                  <AiOutlineMail size={14} className="ml-2 mt-[2px]" />{" "}
                </button>
                <p className="py-2 text-xs md:text-base font-poppins text-[#fff] underline cursor-pointer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
