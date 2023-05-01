import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Lui from "../public/Louis.png";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

const NavLinks = ["home", "about", "skills", "projects", "contact"];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navbg, setNavbg] = useState("#000d17");
  const [linkColor, setLinkColor] = useState("#FFF");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/recipe") {
      setNavbg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavbg("#000d17");
      setLinkColor("#fff");
    }
  }, [router]);
  const handlenav = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <AnimatePresence>
      <div
        style={{ backgroundColor: `${navbg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-sm shadow-teal-900 z-[100] flex justify-center font-fuzzy-bubbles font-bold"
            : "fixed w-full h-20 z-[100] flex justify-center font-fuzzy-bubbles font-bold"
        }
      >
        <div className="flex justify-between items-center w-full px-2 2xl:px-20 ">
          <motion.div {...slideAnimation("left")}>
            <Link href="/#home">
              <Image
                src={Lui}
                alt="Lui"
                className="object-cover hover:cursor-pointer"
                width="205"
                height="80"
              />
            </Link>
          </motion.div>
          <motion.div {...slideAnimation("right")}>
            <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:flex "
            >
              {NavLinks.map((navs, i) => {
                return (
                  <div key={i} className="group flex flex-col">
                    <Link href={`/#${navs}`}>
                      <li
                        onClick={() => {
                          setNav(false);
                        }}
                        className="ml-10 text-lg uppercase "
                      >
                        {navs}
                      </li>
                    </Link>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#08d1d1] ml-10"></span>
                  </div>
                );
              })}
              
            </ul>
            <div className="md:hidden" onClick={handlenav}>
              <AiOutlineMenu size={25} />
            </div>
          </motion.div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000d17] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    src={Lui}
                    alt="lui"
                    className="object-cover"
                    width="117"
                    height="97"
                  />
                </Link>
                <div
                  onClick={handlenav}
                  className="rounded-full shadow-sm shadow-teal-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-white-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Hello, i am a MERN DEV
                </p>
              </div>
              <div className="py-4 flex-col">
                <ul className="uppercase font-kalam font-bold">
                  <Link href="/#about">
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm"
                    >
                      About
                    </li>
                  </Link>
                  <Link href="/#skills">
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm"
                    >
                      Skills
                    </li>
                  </Link>
                  <Link href="/#projects">
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm"
                    >
                      Projects
                    </li>
                  </Link>
                  <Link href="/#contact">
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm"
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
                <div className="pt-38">
                  <p className="uppercase tracking-widest text-[#FFF]">
                    lets Connect
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <Link href="https://www.linkedin.com/in/louis-muriuki-3b13b51b1/">
                      <div className="rounded-full shadow-sm shadow-teal-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link href="https://github.com/LouisMuriuki">
                      <div className="rounded-full shadow-sm shadow-teal-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </Link>
                    <a href="mailto:luihugo247@gmail.com">
                      <div className="rounded-full shadow-sm shadow-teal-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                      </div>
                    </a>
                    <a href="tel:+254759266327">
                      <div className="rounded-full shadow-sm shadow-teal-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
