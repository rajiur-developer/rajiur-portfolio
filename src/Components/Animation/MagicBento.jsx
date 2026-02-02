import { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import "../../assets/css/MagicBento.css";

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

/* ------------------ Helpers ------------------ */
const createParticle = (x, y, color) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position:absolute;
    width:4px;
    height:4px;
    border-radius:50%;
    background:rgba(${color},1);
    box-shadow:0 0 6px rgba(${color},.6);
    left:${x}px;
    top:${y}px;
    pointer-events:none;
  `;
  return el;
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

/* ------------------ Particle Card ------------------ */
const ParticleCard = ({
  children,
  className,
  particleCount,
  glowColor,
  disableAnimations,
  enableTilt,
  enableMagnetism,
  clickEffect,
}) => {
  const ref = useRef(null);
  const particles = useRef([]);

  const clearParticles = useCallback(() => {
    particles.current.forEach(p =>
      gsap.to(p, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => p.remove(),
      })
    );
    particles.current = [];
  }, []);

  useEffect(() => {
    if (disableAnimations || !ref.current) return;
    const el = ref.current;

    const enter = () => {
      for (let i = 0; i < particleCount; i++) {
        const p = createParticle(
          Math.random() * el.offsetWidth,
          Math.random() * el.offsetHeight,
          glowColor
        );
        el.appendChild(p);
        particles.current.push(p);

        gsap.to(p, {
          x: "+=" + (Math.random() * 100 - 50),
          y: "+=" + (Math.random() * 100 - 50),
          opacity: 0.3,
          repeat: -1,
          yoyo: true,
          duration: 2 + Math.random(),
        });
      }
    };

    const leave = () => {
      clearParticles();
      gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0 });
    };

    const move = e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (enableTilt) {
        gsap.to(el, {
          rotateX: ((y / rect.height) - 0.5) * -10,
          rotateY: ((x / rect.width) - 0.5) * 10,
          duration: 0.2,
        });
      }

      if (enableMagnetism) {
        gsap.to(el, {
          x: (x - rect.width / 2) * 0.05,
          y: (y - rect.height / 2) * 0.05,
          duration: 0.3,
        });
      }
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("mousemove", move);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("mousemove", move);
      clearParticles();
    };
  }, [
    particleCount,
    glowColor,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clearParticles,
  ]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

/* ------------------ MagicBento Wrapper ------------------ */
const MagicBento = ({
  children,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const disabled = disableAnimations || isMobile;

  return (
    <div className="bento-section" ref={gridRef}>
      <ParticleCard
        className={`magic-bento-card ${
          enableBorderGlow ? "magic-bento-card--border-glow" : ""
        }`}
        particleCount={particleCount}
        glowColor={glowColor}
        disableAnimations={disabled}
        enableTilt={enableTilt}
        enableMagnetism={enableMagnetism}
        clickEffect={clickEffect}
        style={{ "--glow-color": glowColor }}
      >
        {children}
      </ParticleCard>
    </div>
  );
};

export default MagicBento;
