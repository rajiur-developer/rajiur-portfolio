import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import TextType from "../Animation/TextType";
const Footer = () => {
  const icons = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/Rajiur250530" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/mr.rj250530" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rajiur-rahman-a03a28385",
    },
  ];

  return (
    <footer className="py-4 mt-2 footer-costomize">
      <div className="container text-center">
        <h5>Follow Us</h5>

        <div className="d-flex justify-content-center gap-3 my-2">
          {icons.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="fs-4 gradient-icon text-light"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
              
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <p className="mb-0">
          &copy; {new Date().getFullYear()} Portfolio Website.{" "}
          <span>All rights reserved.</span>
          <div className="designer">
            UI Designer By{" "}
            <TextType
              className="typing-animation"
              text={["Rajiur Rahman", "Front-End Developer!"]}
              typingSpeed={90}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              texts={[
                "Welcome to React Bits! Good to see you!",
                "Build some amazing experiences!",
              ]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
