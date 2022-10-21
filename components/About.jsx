import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid-cols-3 gap-8 ">
        <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text=[#5651e5">About</p>
            <h2 className="py-4">Who i Am</h2>
            <p className="py-2 text-gray-600"></p>
            <p className="py-2 text-gray-600"></p>
            <p className="py-2 text-gray-600"></p>
            <p className="py-2 text-gray-600 underline cursor-pointer"></p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease duration-400">
            <img className="rounded-xl" src="" alt="/"width="" height=""/>
        </div>
      </div>
    </div>
  );
};

export default About;
