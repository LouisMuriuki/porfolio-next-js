import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import lui from "../public/assests/lui.jpg";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [loading, setLoading] = useState(false);

  const notify = () => toast("Message received!");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!email && !message) {
      toast("Please enter your message first");
      return;
    }
    let data = { name, phone, email, subject, message };
    await fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setLoading(false);
        console.log("Response succeeded!");
        setSubmitted(true);
        notify();
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      }
    });
  };

  return (
    <div id="contact" className="w-full h-screen">
      <div className="max-w-[1240px] m-auto px-1 py-8 md:py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#fff]">Contact</p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-teal-900 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer hover:rounded-xl"
                  src={lui}
                  alt="lui"
                />
              </div>
              <div>
                <h2 className="text-2xl text-[#fff] font-poppins mb-5">
                  Louis Muriuki Hugo
                </h2>
                <p className="text-xl font-fuzzy-bubbles">
                  Full Stack Developer
                </p>
                <p className="py-4 text-slate-300">
                  I am available for Freelance or fulltime positions
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="mt-10 flex items-center justify-between">
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
                  <div
                    onClick={() => router.push("mailto:luihugo247@gmail.com")}
                    className="rounded-full shadow-md shadow-teal-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                  <Link href="tel:+254759266327">
                    <div className="rounded-full shadow-md shadow-teal-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-md shadow-teal-900 rounded-xl lg:p-4">
            <div className="p-4"></div>
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col mx-1">
                  <label className="uppercase text-sm py-2 text-slate-200">
                    Name
                  </label>
                  <input
                    className="border-2 outline-0 rounded-lg  text-slate-300 p-3 flex bg-[#242c3a] border-[#242c3a]"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mx-1">
                  <label className="uppercase text-sm py-2 text-slate-200">
                    Phone Number
                  </label>
                  <input
                    className="border-2 outline-0 text-slate-300 rounded-lg p-3 flex bg-[#242c3a] border-[#242c3a]"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mx-1 py-2">
                <label className="uppercase text-sm py-2 text-slate-200">
                  Email
                </label>
                <input
                  className="border-2 outline-0 text-slate-300 rounded-lg p-3 flex bg-[#242c3a] border-[#242c3a]"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex flex-col mx-1 py-2">
                <label className="uppercase text-sm py-2 text-slate-200">
                  Subject
                </label>
                <input
                  className="border-2 outline-0 text-slate-300 rounded-lg p-3 flex bg-[#242c3a] border-[#242c3a]"
                  type="type"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="flex flex-col mx-1 py-2">
                <label className="uppercase text-sm py-2 text-slate-200">
                  Message
                </label>
                <textarea
                  className="border-2 text-slate-300 outline-0 rounded-lg p-3 bg-[#242c3a] border-[#242c3a]"
                  rows="10"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                onClick={loading ? () => {} : (e) => handleSubmit(e)}
                className="w-full p-4 text-gray-100 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-teal-900 p-4 cursor-pointer hover:scale-115 ease-in duration-400">
              <HiOutlineChevronDoubleUp className="text-[#5651e5 ]" size={30} />
            </div>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
