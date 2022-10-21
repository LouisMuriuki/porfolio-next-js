import React from 'react'
import Link from "next/link"; 
import Image from "next/image";
const ProjectItem = ({title,bgImage,projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
          <Image className="rounded-xl group-hover:opacity-10" src={bgImage} alt="/" />
          <div className="hidden group-hover:black absolute top-[50%] left-[50%] ">
            <h3 className="text-2xl text-white tracking-wider text-center">
             {title}
            </h3>
            <p classNAme="pb-4 pt-2 text-white text-center">React Js</p>
            <Link href={projectUrl}>
              <p className="text-center py-3 rounded-lg bg-white text-grey-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
  )
}

export default ProjectItem