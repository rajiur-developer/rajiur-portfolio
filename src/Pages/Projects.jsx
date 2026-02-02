import React from "react";

import Project from "../Components/Projects/Project.jsx";
import ProjectWelcome from "../Components/Projects/ProjectWelcome.jsx";
import Footer from "../Components/Footer/Footer.jsx";
const Projects = () => {
  return (
    <div>
      <ProjectWelcome />

      <div className="mt-5">
        <Project />
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
