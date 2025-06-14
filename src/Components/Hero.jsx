import { motion } from "framer-motion";
import { useMemo } from "react";

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

  const staggerContainer = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.25,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  return (
    <section className="hero-wrapper">
      {/* Left Section */}
      <motion.div
        className="hero-left"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-introduction" variants={fadeUp}>
          <p>Hello, I'm Eris.</p>
          <p>I write poetry through programming</p>

          <motion.div variants={staggerContainer} className="hero-button-group">
            <motion.a
              className="hero-button"
              variants={fadeUp}
              href="#projects"
            >
              View My Projects
            </motion.a>
            <motion.a
              className="hero-button contact-button"
              variants={fadeUp}
              href="#contact"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="neon-circle"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      />
    </section>
  );
};
