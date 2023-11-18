import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiFolderOn } from "react-icons/ci";
import { VscGithubInverted } from "react-icons/vsc";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
const ProjectItem = ({
  title,
  description,
  technologies,
  projectUrl,
  githubLink,
}) => {
  return (
    <div className="relative bg-[#242c3a] px-6 py-6 h-60 md:h-80">
      <div className="flex items-center justify-between">
        <div>
          <CiFolderOn />
        </div>
        <div className="flex items-center gap-5">
          {githubLink ? null : (
            <a href={githubLink} target="_blank">
              <VscGithubInverted />
            </a>
          )}
          {projectUrl ? null : (
            <a href={projectUrl} target="_blank">
              <FaExternalLinkSquareAlt />
            </a>
          )}
        </div>
      </div>
      <div className="mx-1 flex flex-col">
        <h2 className="mt-6 md:mt-8 text-center text-white ">{title}</h2>
        <p className="mt-2 text-center text-slate-300">{description}</p>
      </div>
      <div className="flex mt-6 items-center justify-center absolute bottom-2 left-0 ">
      {technologies.map((tech, i) => {
        return (
          <p className="ml-1 flex w-full flex-row text-center items-center justify-center font-mono text-sm">
            {tech}
          </p>
        );
      })}
      </div>
    </div>
  );
};

export default ProjectItem;
