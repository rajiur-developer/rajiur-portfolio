import React from 'react'
import { motion } from "framer-motion";
import AboutMe from "../Components/AboutMe/AboutMe.jsx";
import Detileme from "../Components/AboutMe/Detileme.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Banner from "../Components/AboutMe/Banner.jsx";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Banner />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Detileme />
      </motion.div>

      <motion.div
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

export default About;
