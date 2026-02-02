import { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaBootstrap,
} from "react-icons/fa";
import { motion } from "framer-motion";
import MagicBento from "../Animation/MagicBento";
import { IoCheckmarkDone } from "react-icons/io5";

const Skills = () => {
  const [cards] = useState([
    {
      title: "HTML",
      icon: <FaHtml5 className="text-danger me-2 hover-effect" size={35} />,
      desc: (
        <ul className="ps-2 mb-0 list-unstyled">
          <p>HTML: Semantic structure</p>
          <h4>What I Can Do:</h4>
          <li>
            <IoCheckmarkDone  className="m-2 " color="rgba(132, 0, 255, 1)" size={20} />
            Semantic Tags
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            SEO Friendly Markup
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Accessible Layout
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Clean Structure
          </li>
        </ul>
      ),
    },
    {
      title: "CSS",
      icon: <FaCss3 className="text-warning me-2 hover-effect" size={35} />,
      desc: (
        <ul className="ps-2 mb-0 list-unstyled">
          <p>CSS: Modern styling</p>
          <h4>What I Can Do:</h4>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Flexbox & Grid
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Animations & Hover Effects
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Responsive design
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Glassmorphism / Custom UI
          </li>
        </ul>
      ),
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className="text-success me-2 hover-effect" size={35} />,
      desc: (
        <ul className="ps-2 mb-0 list-unstyled">
          <p>Bootstrap: Responsive layout</p>
          <h4>What I Can Do:</h4>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Grid system
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Responsive Components
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Fast UI development
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Utility Classes
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Clean Layout
          </li>
        </ul>
      ),
    },
    {
      title: "JavaScript",
      icon: <FaJsSquare className="text-warning me-2 hover-effect" size={35} />,
      desc: (
       <ul className="ps-2 mb-0 list-unstyled">
          <p>JavaScript: Interactive logic</p>
          <h4>What I Can Do:</h4>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            ES6+ features
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            DOM manipulation
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Event handling
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Logic Building
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Basic API Handling
          </li>
        </ul>
      ),
    },
    {
      title: "React",
      icon: <FaReact className="text-info me-2 hover-effect" size={35} />,
      desc: (
        <ul className="mb-0 list-unstyled ">
          <p>React: Component-based UI</p>
          <h4>What I Can Do:</h4>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Components & Hooks
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            State & Props
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            SPA development
          </li>
          <li>
            <IoCheckmarkDone  className="m-2" color="rgba(132, 0, 255, 1)" size={20}/>
            Reusable UI
          </li>
        </ul>
      ),
    },
  ]);

  return (
    <div className="container py-4">
      <h2 className="text-center fw-bold mb-5">My Skills Details</h2>

      <div className="row g-4">
        {cards.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
          
            <MagicBento
              enableStars
              enableSpotlight
              enableBorderGlow
              spotlightRadius={400}
              particleCount={15}
              glowColor="132, 0, 255"
            >
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="card h-100 p-3 text-light glass-card"
              >
                <h5 className="fw-bold d-flex align-items-center">
                  {item.icon}
                  {item.title}
                </h5>
                <div>
                  {item.desc}
                </div>
                
              </motion.div>
            </MagicBento>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
