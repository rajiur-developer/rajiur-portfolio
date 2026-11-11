import Heroimg from "../../assets/Images/Hero-img.png";
import { motion } from "framer-motion";
import CvBtn from "../CVbtn/CvBtn";
import TextType from "../Animation/TextType";

const Hero = () => {
  return (
    <section className="hero-section py-5 px-1" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="hero-text">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h1 className="typeHeader text-light fw-bold">
                  <em>Hello</em>
                  <p>{" I'm "}</p>
                  <TextType
                    className="typing-animation"
                    text={["Rajiur Rahman", "Front-End Developer", "Happy coding!"]}
                    typingSpeed={90}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                  />
                </h1>
                <h3 className="text-primary fs-2 py-3 text-uppercase fw-bold">
                  Front End Developer
                </h3>
                <div className="d-flex align-items-center flex-wrap gap-3">
                  <a className="btn btn-primary px-4 text-uppercase fw-bold" href="#contact">
                    Hire Me
                  </a>
                  <CvBtn />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="col-lg-6 ms-auto pt-5 order-1 order-lg-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="hero-image text-center">
                <img
                  src={Heroimg.src}
                  alt="Rajiur Rahman"
                  className="img-fluid rounded-circle"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
