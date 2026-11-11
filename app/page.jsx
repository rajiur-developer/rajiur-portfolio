"use client";

import Navbar from "../src/Components/Navbar/Navbar";
import BlobCursor from "../src/Components/Animation/BlobCursor";
import Particles from "../src/Components/Animation/Particles";
import Hero from "../src/Components/Hero/Hero";
import AboutMe from "../src/Components/AboutMe/AboutMe";
import Detileme from "../src/Components/AboutMe/Detileme";
import Skills from "../src/Components/Skills/Skills";
import ProjectCount from "../src/Components/ProjrctCount/ProjectCount";
import Project from "../src/Components/Projects/Project";
import Contact from "../src/Components/Contact/Contact";
import Footer from "../src/Components/Footer/Footer";

export default function PortfolioPage() {
  return (
    <div className="position-relative min-vh-100">
      <BlobCursor
        blobType="circle"
        fillColor="#5227FF"
        trailCount={3}
        sizes={[15, 18, 20]}
        innerSizes={[80, 80, 10]}
        innerColor="rgba(50, 255, 112, 0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />

      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ zIndex: -1 }}
        aria-hidden="true"
      >
        <Particles
          particleColors={["#5a71f1"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <Navbar />

      <main>
        <Hero />

        <section className="py-2" id="about-intro">
          <AboutMe />
        </section>

        <section className="py-2">
          <Detileme />
        </section>

        <section className="py-2" id="skills">
          <Skills />
        </section>

        <div className="py-2" id="stats">
          <ProjectCount />
        </div>

        <section className="py-2" id="projects">
          <Project />
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
