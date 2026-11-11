"use client";

import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg myNav sticky-top">
      <div className="container">
        <a className="navbar-brand text-warning fs-4" href="#home" onClick={closeMenu}>
          <span className="text-primary fw-bold">{"<"}</span>Rajiur Rahman
          <span className="text-primary fw-bold">{"/>"}</span>
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-controls="portfolioNavigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="text-info fs-3">
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="portfolioNavigation">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item border-effect" key={item.href}>
                <a className="nav-link" href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
