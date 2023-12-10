import React, { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../context/modalContext";
import { IoClose } from "react-icons/io5";
import Lottie from "lottie-react";
import floatingrobot from "../../public/assests/lottie/floatingrobot.json";
import robot2 from "../../public/assests/lottie/robot2.json";
import { AnimatePresence, motion } from "framer-motion";
import ChatContext from "../../context/ChatContext";
import { slideAnimation } from "../../config/motion";
import { IoMdSend } from "react-icons/io";
import Loader from "../Reusables/Loader";
const bigLottie = {
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
  let refElement = useRef();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const handleWidth = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [width, setWidth, height, setHeight]);

  useEffect(() => {
    const robot = document.getElementById("robot");
    if (robot) {
      window.addEventListener("scroll", () => {
        let offsetY = window.scrollY;
        robot.style.transform = `translateY(${-offsetY * 0.09}px)`;
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
    e.preventDefault();

    if (loading || inputvalue.length <= 1) {
      return;
    } else {
      // const formattedTime = new Date().toLocaleTimeString('en-US', {
      //   hour: 'numeric',
      //   minute: 'numeric',
      //   hour12: true
      // });
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
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            setLoading(false);
            throw new Error(`Server responded with status: ${res.status}`);
          }
        })
        .then((data) => {
          console.log(data);
          setChatlog((chatlog) => [
            ...chatlog,
            { role: data.role, message: data?.message },
          ]);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
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

  useEffect(() => {
    if (refElement.current) {
      refElement.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [inputvalue, chatlog]);
  console.log(chatlog);
  return (
    <>
      {modalOpen ? (
        <motion.div
          {...slideAnimation("left")}
          className="flex items-center shadow-md shadow-teal-900 rounded-lg  bg-transparent bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 justify-end max-h-screen ease-in duration-300"
        >
          <div
            className={
              "h-[440px] md:h-[540px] pt-4 pr-1 sm:w-full md:max-w-2xl"
            }
          >
            <div className="flex w-full mt-[-40px] items-center justify-between ">
              <Lottie
                loop={true}
                animationData={robot2}
                draggable={true}
                // interactivity={interactivity}
                style={smallLottie}
              />
              <div className="flex gap-0 items-center justify-center">
                <p className="flex items-center justify-center mr-10 font-fuzzy-bubbles">
                  Vinci
                </p>
              </div>

              <IoClose
                onClick={closeModal}
                color="red"
                size={24}
                className="flex justify-end cursor-pointer hover:scale-125 ease-in duration-300"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex mt-2 h-[295px] md:h-[400px] w-full mb-0 no-scrollbar overflow-y-scroll flex-col">
                {chatlog.map((chat, i) => {
                  console.log(chatlog.length, i);
                  return (
                    <div
                      key={i}
                      className={`relative flex items-center   px-1 ${
                        chat?.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {loading && i === chatlog.length - 1 && (
                        <div
                          key={chatlog.length}
                          className="flex items-center justify-start absolute left-4 top-12 h-5"
                        >
                          <Loader />
                        </div>
                      )}
                      <div
                        ref={refElement}
                        className={`py-1 px-2 mb-7 rounded-lg font-fuzzy-bubbles ease-in duration-700 ${
                          chat?.role === "user"
                            ? "bg-green-500 bg-opacity-60"
                            : "bg-teal-500 bg-opacity-60"
                        }`}
                      >
                        {chat?.message?.length > 1 ? (
                          <p className="text-white text-sm">{chat.message}</p>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
              <form className="mt-auto" onSubmit={handleSubmit}>
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
          <motion.div
            className="cursor-pointer"
            id="robot"
            onTouchEnd={() =>
              setTimeout(() => {
                openModal;
              }, 200)
            }
            onClick={openModal}
          >
            <Lottie
              onClick={openModal}
              className="hover:scale-105 ease-in duration-300 "
              loop={true}
              animationData={floatingrobot}
              draggable={false}
              style={width < 728 ? mediumLottie : bigLottie}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Floatingwindow;
