"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useContext, useEffect, useId } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { headTextAnimation, slideAnimation } from "../config/motion";
import { Particles } from "./Particles";
import { useRouter } from "next/router";
import ChatContext from "../context/ChatContext";

const Main = () => {
  var sessionid =
    typeof window !== "undefined" && sessionStorage.getItem("SessionID");
  const { setChatlog } = useContext(ChatContext);
  const session_ID = useId();
  const router = useRouter();
  useEffect(() => {
    const home = document.getElementById("home");
    window.addEventListener("scroll", () => {
      let offsetY = window.scrollY;
      home.style.transform = `translateY(${offsetY * 0.4}px)`;
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  useEffect(() => {
    FirstCall();
  }, []);

  const FirstCall = () => {
    fetch("/api/openai", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify("A new visitor is here, welcome them"),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setChatlog((chatlog) => [
          ...chatlog,
          { role: data.role, message: data?.message },
        ]);
      });
    });
    sessionStorage.setItem("SessionID", session_ID);
  };
  return (
    <AnimatePresence>
      <motion.div
        id="home"
        className="w-full h-screen text-center"
      >
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <Particles className="absolute inset-0 -z-10 " />
          <div>
            <motion.div {...headTextAnimation}>
              <p className="uppercase text-xl tracking-widest text-[#fff]  font-fuzzy-bubbles">
                MERN FULLSTACK DEVELOPER
              </p>
              <h1 className="py-4 text-[#fff]">
                Hello, I'm{" "}
                <span className="text-[#08d1d1] font-fuzzy-bubbles">
                  LOUIS MURIUKI
                </span>
              </h1>
              <h1 className="py-4 text-[#fff]">
                A Full Stack Web and Mobile Developer
              </h1>
            </motion.div>

            <p className="py-4 text-gray-600 max-w-[70%] m-auto"></p>
            <motion.div
              {...slideAnimation("up")}
              className="flex items-center justify-between nax-w-[330px] m-auto py-4"
            >
              <Link href="https://www.linkedin.com/in/louis-muriuki-3b13b51b1/">
                <a target="_blank">
                  <div className="rounded-full shadow-md shadow-teal-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
              </Link>
              <Link href="https://github.com/LouisMuriuki">
                <a target="_blank">
                  <div className="rounded-full shadow-md shadow-teal-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
              </Link>
              <a href="mailto:'luihugo247@gmail.com'">
                <div className="rounded-full shadow-md shadow-teal-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </a>
              <a href="tel:+254759266327">
                <div className="rounded-full shadow-md shadow-teal-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Main;
