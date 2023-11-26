import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../../context/modalContext";
import { IoClose } from "react-icons/io5";
import Lottie, { useLottie } from "lottie-react";
import floatingrobot from "../../public/assests/lottie/floatingrobot.json";
import robot2 from "../../public/assests/lottie/robot2.json";
import { AnimatePresence, motion } from "framer-motion";
import ChatContext from "../../context/ChatContext";
import { slideAnimation } from "../../config/motion";
import { IoMdSend } from "react-icons/io";
const style = {
  height: 260,
  width: 260,
};
const smallLottie = {
  height: 100,
  width: 100,
};
const mediumLottie = {
  height: 150,
  width: 150,
};
export const Floatingwindow = () => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const { chatlog, setChatlog } = useContext(ChatContext);
  const [inputvalue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const robot = document.getElementById("robot");
    if (robot) {
      window.addEventListener("scroll", () => {
        let offsetY = window.scrollY;
        robot.style.transform = `translateY(${-offsetY * 0.1}px)`;
      });

      return () => {
        window.removeEventListener("scroll", () => {});
      };
    }
  }, [modalOpen]);

  const interactivity = {
    //not working
    mode: "scroll",
    actions: [
      {
        frames: [0, 181],
        type: "seek",
        visibility: [0.1, 0.85],
      },
    ],
  };

  const handleSubmit = (e) => {
    if (loading||inputvalue.length <= 1) {
      return
    } else {
      e.preventDefault();
      setChatlog((chatlog) => [
        ...chatlog,
        { role: "user", message: inputvalue },
      ]);
      setLoading(true);
      fetch("/api/openai", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputvalue),
      }).then((res) => {
        res
          .json()
          .then((data) => {
            console.log(data);
            setChatlog((chatlog) => [
              ...chatlog,
              { role: data.role, message: data?.message },
            ]);
          })
          .finally(() => {
            setLoading(false);
          });
      });
      setInputValue("");
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen ? (
        <motion.div
          {...slideAnimation("left")}
          className="flex items-center shadow-md shadow-teal-900 rounded-lg  bg-transparent bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 justify-end max-h-screen ease-in duration-300"
        >
          <div className="h-[600px] md:h-[700px] pt-4 pr-2  w-80 max-w-md ">
            <div className="flex w-full mt-[-40px] items-center justify-between ">
              <Lottie
                loop={true}
                animationData={robot2}
                draggable={true}
                // interactivity={interactivity}
                style={smallLottie}
              />
              <div className="flex gap-0 items-center justify-center">
                <p className="flex items-center justify-center mr-10">Dave</p>
              </div>

              <IoClose
                onClick={closeModal}
                color="red"
                size={24}
                className="flex justify-end cursor-pointer hover:scale-125 ease-in duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex mt-2 h-[460px] md:h-[570px] mb-0 overflow-y-scroll flex-col">
                {chatlog.map((chat, i) => {
                  console.log(chatlog.length, i);
                  return (
                    <div
                      key={i}
                      className={`flex items-center   px-1 ${
                        chat.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {/* {loading &&
                      chat.role !== "user" &&
                      i === chatlog.length - 1 ? (
                        <div key={chatlog.length}>
                          <Lottie
                            style={{}}
                            animationData={animationData}
                            className="flex justify-center items-center scale-50"
                            loop={true}
                          />
                        </div>
                      ) : ( */}
                      <div
                        className={`py-1 px-2 mb-5 rounded-lg font-fuzzy-bubbles ease-in duration-700 ${
                          chat.role === "user" ? "bg-purple-500" : "bg-teal-500"
                        }`}
                      >
                        {chat.message.length > 1 ? (
                          <p className="text-slate-100 text-sm">
                            {chat.message}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
              <form className="mt-auto ">
                <div className="w-full">
                  <div className="flex items-center gap-2 justify-between px-1">
                    <input
                      className="flex relative rounded-lg py-2 px-1 mx-1 w-full text-sm font-fuzzy-bubbles outline-none text-slate-900"
                      placeholder="Type your message..."
                      value={inputvalue}
                      onChange={(e) => setInputValue(e.target.value)}
                      type="text"
                    />
                    <IoMdSend
                      size={22}
                      onClick={handleSubmit}
                      className="absolute right-6 cursor-pointer"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div className="cursor-pointer" id="robot" onClick={openModal}>
            <Lottie
              className="hover:scale-105 ease-in duration-300 "
              loop={true}
              animationData={floatingrobot}
              draggable={true}
              style={width < 768 ? mediumLottie : style}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Floatingwindow;
