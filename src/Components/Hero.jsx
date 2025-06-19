import { motion } from "framer-motion";
import { useMemo } from "react";
import coderImg from "../Images/coder.png";

export const Hero = () => {
  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    }),
    []
  );

  const fadeZoom = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut", delay: 0.6 },
      },
    }),
    []
  );

  const staggerContainer = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.25,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  return (
    <motion.section
      className="hero-wrapper"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-left" variants={staggerContainer}>
        <motion.p className="hero-introduction" variants={fadeUp}>
          Hello, I'm Eris. <br /> I write poetry through code.
        </motion.p>
        <motion.p className="hero-description" variants={fadeUp}>
          I'm a developer with a focus on creating clean, user-friendly
          interfaces and meaningful digital experiences. In my free time,
          I enjoy building, breaking, fixing and refining software.
        </motion.p>
        <motion.a
          className="hero-button"
          href="#projects"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects
        </motion.a>
      </motion.div>

      <motion.div className="hero-right" variants={fadeZoom}>
        <img src={coderImg} alt="" className="hero-img" />
      </motion.div>
    </motion.section>
  );
};
