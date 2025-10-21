import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div
      className="landing"
      style={{
        background: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9)),
          url("/cinematic-bg.jpg") center/cover no-repeat
        `,
      }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          MovieClary
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Unlimited Movies, Discover Instantly!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Watch and explore trending around the world.
        </motion.p>

        <motion.button
          onClick={handleClick}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 30px rgba(229, 9, 20, 0.6)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
          className="watch-btn"
        >
          Watch More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
