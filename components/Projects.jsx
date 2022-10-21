import React from "react";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-w py-16"></div>
      <p className="uppercase text-xl tracking-widest text=[#5651e5]">
        Projects
      </p>
      <h2 className="py-4">What i've build</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem title="Movie App" bgImage="" projectUrl="/"/>
        <ProjectItem title="Recipe App" bgImage="" projectUrl="/recipe"/>
        <ProjectItem title="" bgImage="" projectUrl="/"/>
        <ProjectItem title="" bgImage="" projectUrl="/"/>
      </div>
    </div>
  );
};

export default Projects;
