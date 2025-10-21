import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-content">
        {/* Logo / Brand */}
        <Link to="/" className="nav-logo">
          MovieClary
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link
            to="/home"
            className={location.pathname === "/home" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/favorites"
            className={location.pathname === "/favorites" ? "active" : ""}
          >
            Favorites
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
