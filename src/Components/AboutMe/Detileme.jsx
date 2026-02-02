// Detileme.jsx
import React from "react";
import Heroimg from "../../assets/Images/Hero-img.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaCheckCircle,
  FaBootstrap,
  FaDownload
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import CvBtn from "../CVbtn/CvBtn";

const Detileme = () => {
  const navigate = useNavigate();

  function handleContactClick() {
    navigate("/contact");
  }

  

  return (
    <section className="py-5 text-light" id="about">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-warning">About Me</h1>
          <p className="lead text-light">Who I Am & What I Do</p>
          <div className="d-flex justify-content-center">
            <div
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#dac805ff",
              }}
            ></div>
          </div>
        </div>

        <div className="row g-5">
          {/* Left Profile Image */}
          <div className="col-lg-4 bg-transparent">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="card about-card shadow-sm text-center p-4">
                <div className="mb-3">
                  <img
                    src={Heroimg}
                    alt="Profile"
                    className="img-fluid rounded-circle border border-4 border-warning shadow"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                      transform: "rotateY(180deg)",
                    }}
                  />
                </div>

                <h4>Md Rajiur Rhman</h4>
                <p className="fs-5 mb-3 text-primary">Frontend Developer</p>
               <div className="w-100">
                 <CvBtn className='bg-light' />
               </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-8">
            {/* Introduction */}
            <div className="mb-5">
              <h3 className="fw-bold mb-3">Introduction</h3>
              <div className="p-4 about-card rounded border-start border-4 border-primary">
                <p className="lead fst-italic text-light">
                  "I'm a Frontend Developer specializing in creating responsive,
                  user-friendly, and modern web interfaces using HTML, CSS,
                  JavaScript, and React."
                </p>
                <p className="mb-0 text-light">
                  I love building interactive UI components and bringing designs
                  to life. Currently, I am focusing on mastering React Hooks and
                  state management to build scalable applications.
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="mb-5">
              <h3 className="fw-bold mb-3">My Story</h3>
              <p className="text-light">
                My journey into coding began when I was fascinated by how
                websites work visually. I started with simple HTML/CSS projects,
                but my curiosity led me to JavaScript. I am passionate about
                bridging the gap between design and engineering, ensuring that
                every pixel looks perfect.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-5">
              <h3 className="fw-bold mb-3">Technical Skills</h3>

              <h5 className="text-primary mb-3">Frontend</h5>
              <div className="row g-3 mb-4 Skill-Batch">
                <SkillBadge name="HTML5" icon={<FaHtml5 />} color="text-danger" />
                <SkillBadge name="CSS3" icon={<FaCss3Alt />} color="text-primary" />
                <SkillBadge name="Bootstrap 5" icon={<FaBootstrap />} color="text-info" />
                <SkillBadge name="JavaScript" icon={<FaJs />} color="text-warning" />
                <SkillBadge name="React.js" icon={<FaReact />} color="text-info" />
              </div>

              <h5 className="text-primary mb-3">Tools</h5>
              <div className="row g-3">
                <SkillBadge name="Git & GitHub" icon={<FaGitAlt />} color="text-light" />
                <SkillBadge name="VS Code" icon={<VscVscode />} color="text-primary" />
                <SkillBadge name="Figma" icon={<FaFigma />} color="text-danger" />
              </div>
            </div>

            {/* Experience */}
            <div className="mb-5">
              <h3 className="fw-bold mb-3 ">Experience</h3>

              <div className="card border-1 expreance-section p-4 rounded mb-3">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h5 className="card-title fw-bold mb-1 text-light">
                      Frontend Developer Intern
                    </h5>
                    
                  </div>
                  <h6 className="text-primary mb-2">European IT Institute</h6>
                  
                  <ul className="list-unstyled mb-0 text-light">
                    <li className="mb-2">
                      🔹 Developed responsive UI components using React and Bootstrap.
                    </li>
                    <li className="mb-2">
                      🔹 Worked closely with the backend team to integrate APIs.
                    </li>
                    <li>
                      🔹 Collaborated in team projects using Git for version control.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-5">
              <h3 className="fw-bold mb-3">How I Work</h3>
              <div className="row">
                <ApproachItem text="Clean & Reusable Code" />
                <ApproachItem text="Attention to UI Design" />
                <ApproachItem text="Fast Communication" />
                <ApproachItem text="Problem-Solving Attitude" />
              </div>
            </div>

            {/* Interests */}
            <div className="mb-5">
              <h3 className="fw-bold mb-3">Interests</h3>

              <div className="row gy-2">
                <IntarestBatch intarestText="Programming" />
                <IntarestBatch intarestText="UI Design" />
                <IntarestBatch intarestText="Tech Blogs" />
                <IntarestBatch intarestText="Learning" />
              </div>

            </div>

            {/* CTA */}
            <div className="alert-section alert-primary text-center p-5 rounded-3">
              <h4 className="alert-heading fw-bold text-light">
                Let's Work Together!
              </h4>
              <p className="mb-4 text-light">
                I'm always open to new opportunities and interesting projects.
              </p>
              <button
                onClick={handleContactClick}
                className="btn btn-primary btn-lg px-5 shadow"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Badge Component with Hover Effect
const SkillBadge = ({ name, icon, color }) => (
  <div className="col-12 col-md-4 col-lg-3">
    <div
      className="skill-hover p-2 border rounded shadow-sm d-flex align-items-center gap-2 justify-content-center"
      style={{
        transition: "0.3s ease",
        cursor: "pointer",
      }}
    >
      <span className={`fs-4 skill-icon ${color}`}>{icon}</span>
      <span className="fw-medium">{name}</span>
    </div>
  </div>
);

// Approach Items
const ApproachItem = ({ text }) => (
  <div className="col-md-6 mb-3">
    <div className="d-flex align-items-center p-3 rounded shadow-sm">
      <FaCheckCircle className="text-success me-3 fs-4" />
      <span className="fw-medium">{text}</span>
    </div>
  </div>
);


const IntarestBatch = ({ intarestText }) => (
  <div className="col-md-2 col-sm-4">
    <span className="badge bg-secondary me-2 p-2">{intarestText}</span>
  </div>
);

export default Detileme;
