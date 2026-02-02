"use client";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "../../assets/css/Project.css";

import weather from "../../assets/Images/projectImg/weather-img.png";
import todo from "../../assets/Images/projectImg/todo-img.png";
import portfolio from "../../assets/Images/projectImg/portfolio-img.png";
import Lebaration from "../../assets/Images/projectImg/Lebaretion-img.png";
import Agri from "../../assets/Images/projectImg/Agri-img.png";

const skillData = [
  {
    title: "Weather-App-React",
    content: "Modern UI Design And Real-Time Data Update",
    img: weather,
    link: "https://rajiur-weather.netlify.app/",
  },
  {
    title: "TODO App React",
    content: "Modern UI Design and Real-Time Data Update",
    img: todo,
    link: "https://rajiur-todo.netlify.app/",
  },
  {
    title: "Portfolio Project",
    content: "Modern UI Project Using React Hooks",
    img: portfolio,
    link: "https://rajiur-portfolio.netlify.app/",
  },
  {
    title: "Liberation War",
    content: "Responsive UI with HTML, CSS, JS",
    img: Lebaration,
    link: "https://rajiur-developer.github.io/LiberationWar/",
  },
  {
    title: "Agriculture Hub",
    content: "Single Page Application with React",
    img: Agri,
    link: "https://rajiur-developer.github.io/agriHub/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const cardRefs = useRef([]);
  const reduceMotion = useReducedMotion();

  // 3D depth (desktop only)
  const handleMouseMove = (index, e) => {
    if (window.innerWidth < 768) return;

    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 25;
    const rotateX = -(y / rect.height - 0.5) * 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="container">
      <h2 className="text-center mb-5 fw-bold section-title">My Projects</h2>

      <div className="row g-4 justify-content-center">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <motion.div
              ref={(el) => (cardRefs.current[index] = el)}
              className="custom-card glass-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={!reduceMotion ? { scale: 1.08 } : {}}
              whileTap={{ scale: 0.96 }}
              onMouseMove={(e) => handleMouseMove(index, e)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="custom-card-img"
              />

              <div className="custom-card-overlay">
                <h5 className="fw-bold text-center">{skill.title}</h5>
                <p className="text-center">{skill.content}</p>

                <motion.a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="explore-btn"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <span>
                    <FaArrowRight className="ms-2 project-icon" />{" "}
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
