import React from "react";
import Link from "next/link";
import { FaFolder } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
const ProjectItem = ({
  title,
  description,
  technologies,
  projectUrl,
  githublink,
  publicrepo,
  playstorelink,
  appstorelink,
}) => {
  const processedTechonoligies = technologies.join();
  return (
    <div className="relative  bg-[#17153B] px-6 py-6 h-64 md:h-80 mx-6 my-2 md:mx-1 rounded-xl cursor-pointer hover:scale-105 hover:shadow-2xl shadow-sm ease-in duration-300">
      <div className="flex items-center justify-between">
        <div className="cursor-default">
          {publicrepo ? <FaFolderOpen /> : <FaFolder />}
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          {appstorelink ? (
            <Link href={appstorelink} target="_blank">
              <IoLogoAppleAppstore className="hover:scale-125 ease-in duration-300" />
            </Link>
          ) : null}
          {playstorelink ? (
            <Link href={playstorelink} target="_blank">
              <IoLogoGooglePlaystore className="hover:scale-125 ease-in duration-300" />
            </Link>
          ) : null}
          {githublink ? (
            <Link href={githublink} target="_blank">
              <VscGithubInverted className="hover:scale-125 ease-in duration-300" />
            </Link>
          ) : null}
          {projectUrl ? (
            <Link href={projectUrl} target="_blank">
              <FaExternalLinkSquareAlt className="hover:scale-125 ease-in duration-300" />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="mx-1 flex flex-col">
        <h2 className="mt-6 md:mt-8 text-center text-base md:text-lg text-white ">
          {title}
        </h2>
        <p className="mt-2 text-center text-slate-300 font-lato text-sm">
          {description}
        </p>
      </div>
      <div className="flex mb-6 items-center justify-center absolute bottom-2">
        <p className="ml-1 flex  w-full flex-row text-center font-mono text-sm">
          {processedTechonoligies}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
