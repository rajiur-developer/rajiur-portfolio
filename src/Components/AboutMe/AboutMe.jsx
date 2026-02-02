import React from "react";
import { motion } from "framer-motion";
import Heroimg from "../../assets/Images/Hero-img.png";

const AboutMe = () => {
  return (
    <div>
      <section className="recent-work">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 md-m-0">
              <motion.div
                initial={{ x: -300, opacity: 0 }} // প্রথমে কোথায় থাকবে
                animate={{ x: 0, opacity: 1 }} // শেষে কোথায় আসবে
                transition={{ duration: 1.5 }} // কতো সময় নেবে  v>>
              >
                <img src={Heroimg} alt="" />
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ x: +300, opacity: 0 }} // প্রথমে কোথায় থাকবে
                animate={{ x: 0, opacity: 1 }} // শেষে কোথায় আসবে
                transition={{ duration: 1.5 }} // কতো সময় নেবে  v>>
              >
                <h2 className="fs-1 text-uppercase fw-bold text-light py-4">
                  <span style={{color:'orange'}}>let’s</span> <br />
                  Introduce about <br />
                  <span style={{color:'orange'}}>myself</span>
                </h2>
                <p className="fw-lighter text-light fs-5">
                  I am a dedicated Front-End Web Developer with strong expertise
                  in HTML, CSS, Bootstrap, and React.js, backed by over 2 years
                  of practical experience in web development. I specialize in
                  creating responsive, modern, and visually engaging user
                  interfaces. Skilled in WordPress customization and graphic
                  design (Photoshop & Illustrator), I deliver clean,
                  user-focused, and performance-optimized web solutions. Eager
                  to enhance JavaScript and React skills through hands-on
                  projects and collaborative work.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
