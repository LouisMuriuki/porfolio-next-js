import React from 'react'
import Link from "next/link"; 
import Image from "next/image";
const ProjectItem = ({title,bgImage,projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-teal-900 rounded-xl p-4 group hover: hover:transition-all ease-in duration-700 hover:bg-gradient-to-r  from-[#527272] to-[#4e7272] hover:shadow-[#000d17]">
          <Image className="rounded-xl group-hover:opacity-30 cursor-pointer" src={bgImage} alt="/" />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className="text-2xl text-white tracking-wider text-center">
             {title}
            </h3>
            <p className="pb-4 pt-2 text-white text-center">React Js</p>
            <a href={projectUrl} target="_blank" rel='noreferrer'>
              <p className="text-center py-3 rounded-lg bg-white text-grey-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </a>
          </div>
        </div>
  )
}

export default ProjectItem