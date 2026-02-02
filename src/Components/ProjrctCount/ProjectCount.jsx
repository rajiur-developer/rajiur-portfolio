import React, { useEffect, useRef, useState } from "react";
import CountUp from "../Animation/CountUp";
import { FaCode, FaCogs, FaLayerGroup, FaRocket } from "react-icons/fa";

const CountData = [
  { Count: 1000, title: "Hours Coding Practice", icon: FaCode },
  { Count: 8, title: "Real-world Mini Projects", icon: FaCogs },
  { Count: 20, title: "Small Projects Built", icon: FaLayerGroup },
  { Count: 1.5, title: "Years of Web Dev Learning", icon: FaRocket },
];

const ProjectCount = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCount) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [startCount]);

  return (
    <section className="project-count-section" ref={sectionRef}>
      <div className="container">
        <div className="row g-4 justify-content-center shadow">
          {CountData.map((data, index) => {
            const Icon = data.icon; // React Icon Component
            return (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="card count-card h-100">
                  <div className="card-body text-center d-flex flex-column justify-content-center">

                    {/* ICON WITH SVG GRADIENT */}
                    <svg
                      className="count-icon mb-3"
                      width="46"
                      height="46"
                      viewBox="0 0 24 24"
                    >
                      <defs>
                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#df8908" />
                          <stop offset="100%" stopColor="#b415ff" />
                        </linearGradient>
                      </defs>
                      <Icon fill={`url(#grad-${index})`} />
                    </svg>

                    {/* COUNT */}
                    <h2 className="count-number">
                      {startCount ? (
                        <CountUp
                          from={0}
                          to={data.Count}
                          duration={1.6}
                          separator=","
                        />
                      ) : (
                        0
                      )}
                      <span className="plus">+</span>
                    </h2>

                    <p className="count-title mb-0 text-light">{data.title}</p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCount;
