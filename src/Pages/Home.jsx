import React from "react";
import { motion } from "framer-motion";
import Hero from "../Components/Hero/Hero.jsx";
import AboutMe from "../Components/AboutMe/AboutMe.jsx";
import Skills from "../Components/Skills/Skills.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Project from "../Components/Projects/Project.jsx";
import ProjectCount from "../Components/ProjrctCount/ProjectCount.jsx";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <motion.div
        className="py-2"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <AboutMe />
      </motion.div>
      <motion.div
        className="py-2"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>
      <motion.div
        className="py-2"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <ProjectCount />
      </motion.div>
      <motion.div
        className="py-2"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Project />
      </motion.div>
      <motion.div
        className="py-0"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Home;
