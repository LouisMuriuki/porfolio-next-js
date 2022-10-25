import React from "react";
import ProjectItem from "./ProjectItem";
import Biashara from "../public/assests/projects/Biashara.png"
import Recipe from "../public/assests/projects/recipe.png"
import Notes from "../public/assests/projects/notes.png"
import Meme from "../public/assests/projects/memegenerator.png"
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-w py-16"></div>
      <p className="py-4 px-20 uppercase text-xl tracking-widest font-lato text-[#fff]">
        Projects
      </p>
      <h2 className="p-4 px-20 font-lato ">What i've build</h2>
      <div className="grid md:grid-cols-2 gap-8 p2-4 px-20">
        <ProjectItem title="Biashara Erp" bgImage={Biashara} projectUrl="https://barpoint-app.vercel.app/"/>
        <ProjectItem title="Recipe App" bgImage={Recipe} projectUrl="https://github.com/LouisMuriuki/bon-appetite"/>
        <ProjectItem title="Notes App" bgImage={Notes} projectUrl="https://github.com/LouisMuriuki/Notzy"/>
        <ProjectItem title="Meme Generator" bgImage={Meme} projectUrl="https://github.com/LouisMuriuki/MemeGenerator-React"/>
      </div>
      <div className="flex items-center justify-center mt-10">
        <a href="https://github.com/LouisMuriuki" target="_blank">
           <p className="text-xl underline"> There's More</p>
        </a>
       
      </div>
    </div>
  );
};

export default Projects;
