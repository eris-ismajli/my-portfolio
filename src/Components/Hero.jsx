import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      ease: "easeOut",
    },
  },
};

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      {/* Left Section */}
      <motion.div
        className="hero-left"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-introduction"
          variants={fadeUp}
        >
          <p>Hello, I'm Eris.</p>

          <p>I write poetry through programming</p>
          <motion.p
            className="hero-description"
            variants={fadeUp}
            transition={{ duration: 1 }}
          >
          </motion.p>
          <motion.div variants={staggerContainer} className="hero-button-group">
            <motion.a
              className="hero-button"
              variants={fadeUp}
              transition={{ duration: 1.1 }}
              href="#projects"
            >
              View My Projects
            </motion.a>
            <motion.a
              className="hero-button contact-button"
              variants={fadeUp}
              transition={{ duration: 1.1 }}
              href="#contact"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="neon-circle"
        initial={{ scale: .6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: .8, ease: "easeOut", delay: 0.4 }}
      />
    </section>
  );
};
