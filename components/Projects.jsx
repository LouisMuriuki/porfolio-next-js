import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../config/db";
import useScreenSize from "../hooks/useScreenSize";

const Projects = () => {
  const [days] = useState(365);
  const list = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];
  const Box = ({ index }) => {
    return <div className={list.includes(index) ? "box active" : "box"}></div>;
  };

  const Githuboxes = () => {
    return Array.from({ length: days }, (element, index) => (
      <Box key={index} index={index} />
    ));
  };

  const dates = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Agt",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const { mobile } = useScreenSize();
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] p-2 mx-auto py-10 md:py-20">
        <p className="py-1 md:px-0 text-xl md:text-2xl  uppercase tracking-widest font-lato text-[#fff]">
          Projects
        </p>
        <h2 className="font-lato text-sm underline mb-10">What i've build</h2>
        <div className="grid md:grid-cols-4 gap-8 mb-5 ">
          {projects.map((project, i) => {
            return (
              <ProjectItem
                key={i}
                title={project.name}
                description={project.description}
                technologies={project.technologies}
                role={project.role}
                projectUrl={project.externalLink}
                githublink={project.githubLink}
                publicrepo={project.public}
                playstorelink={project.playstorelink}
                appstorelink={project.appstorelink}
              />
            );
          })}
        </div>
        <div className="githubContainer mt-10 md:mt-20">
          {mobile ? null : (
            <div className="githubChart">
              <div className="dates">
                {dates.map((date, i) => {
                  return <span key={i}>{date}</span>;
                })}
              </div>
              <div className="boxContainer">
                <Githuboxes />
              </div>
            </div>
          )}
          <a
            href="https://github.com/LouisMuriuki"
            target="_blank"
            rel="noreferrer"
          >
            <h2
              className={
                mobile
                  ? "githubTitlesmall text-xl font-fuzzy-bubbles mt-5 md:mt-8"
                  : "githubTitle text-x font-fuzzy-bubbles  mt-5 md:mt-8"
              }
            >
              ON GITHUB
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
