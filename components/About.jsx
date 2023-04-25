import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Lui from "../public/assests/lui.jpg";
import { slideAnimation } from "../config/motion";
import HideContext from "../context/HideContext";
const About = () => {
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
          className="w-full h-screen p-2 flex items-center py-16 "
        >
          <div className="max-w-[1240px] m-auto md:grid-cols-2 gap-8 ">
            <p className="uppercase text-xl font-lato tracking-widest text-[#fff]">
              About
            </p>
            <h2 className="py-4 font-lato">Who i Am</h2>
            <div className="flex flex-col md:flex-row gap-x-8 ">
              <motion.div
                style={isInView ? { ...slideAnimation("left") } : null}
                id="image"
                className="col-span-1 pt-6 w-full md:w-auto h-auto md:h-full  rounded-xl"
              >
                <Image
                  id="luiimage"
                  className="pt-0 md:pt-20 xl:pt-40 object-contain rounded-xl hover:scale-110 ease-in duration-300 hover:rounded-xl cursor-pointer "
                  src={Lui}
                  alt="Lui"
                />
              </motion.div>
              <div
                id="text"
                className="col-span-1 flex flex-col z-10 rounded-xl h-max hover:shadow-md overflow-hidden shadow-teal-900"
              >
                <p className="py-2 z-10 text-xs md:text-sm lg:text-base font-poppins text-[#fff]">
                  Hi there👋, My name is{" "}
                  <span className="text-[#08d1d1] text-sm md:text-lg font-kalam">
                    Louis Muriuki Hugo
                  </span>{" "}
                  and I am a FullStack developer with a focus on building
                  intuitive, user-friendly web and mobile applications. I have a
                  strong foundation in React js for the front-end and nodejs for
                  the backend as well React Native to build cross-platform
                  mobile apps.
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
                    <p className="py-2 z-10 text-xs md:text-base font-poppins text-[#fff]">
                      I have a passion for clean, efficient code and enjoy the
                      process of turning complex problems into simple, elegant
                      solutions. .
                    </p>
                    <p className="py-2 z-10 text-xs md:text-base font-poppins  text-[#fff]">
                      In my free time, I enjoy staying active and exploring the
                      great outdoors. I love going on hikes and swims, and also
                      enjoy hitting the gym to stay fit. Also I stay up to date
                      with the latest developments in the tech industry to learn
                      and grow
                    </p>
                    <p className="py-2 z-10 text-xs md:text-base font-poppins  text-[#fff]">
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
                )}
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
