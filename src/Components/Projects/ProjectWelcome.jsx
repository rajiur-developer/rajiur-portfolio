import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ProjectWelcome = () => {
  return (
    <div className="w-100">
      <motion.div
        className="py-2"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div
          className="container-fluid ProjectWelcome"
          style={{ height: "300px" }}
        >
          <div className="row h-100">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center text-center">
              <h1 className="text-light mb-3">
                Welcome to My Recent Projects
              </h1>
              <p className="text-light w-75">
                Here are some of the projects I’ve recently built, focusing on
                performance, usability, and modern design.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectWelcome;
