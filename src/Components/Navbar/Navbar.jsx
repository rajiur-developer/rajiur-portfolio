import React from "react";
import { Bounce, Fade, Roll, Zoom } from "react-reveal";
// ধাপ ১: <a> ট্যাগের পরিবর্তে 'Link' ইম্পোর্ট করুন
import { Link } from "react-router-dom";
import { RiMenu3Line , RiCloseLine} from "react-icons/ri";
import { useState } from "react";


const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);

  // Toggle control
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Zoom>
    <nav className="navbar navbar-expand-lg  myNav sticky-top">
      <div className="container">
        <Link className="navbar-brand text-warning fs-4" to="/">
          <span className="text-primary fw-bold">{"<"}</span>Rajiur Rahman<span className="text-primary fw-bold">{"/>"}</span>
        </Link>
        <button
          className="navbar-toggler 
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          // aria-controls="navbarNav"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="text-light behaviyar fs-3 ">{
            !isOpen? <span className="text-info"><RiMenu3Line /></span>:<span className="text-info"><RiCloseLine /></span> 
            }</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* ধাপ ৩: আপনার App.js ফাইলে থাকা রুটের সাথে মিল রেখে লিঙ্কগুলো আপডেট করুন।
              আপনার App.js এ '/about', '/project', '/contact' ইত্যাদি রুট আছে।
            */}
            <li className="nav-item border-effect">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
          
              <li className="nav-item border-effect">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item border-effect">
                <Link className="nav-link" to="/project">
                  Project
                </Link>
              </li>
                        
            <li className="nav-item border-effect">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </Zoom>
  );
};

export default Navbar;
