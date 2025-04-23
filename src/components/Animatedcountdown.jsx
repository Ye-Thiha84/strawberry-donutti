import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/AnimatedCountdown.css";

const AnimatedUnit = ({ value, label }) => (
  <div className="animated-unit">
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="animated-value"
      >
        {value}
      </motion.span>
    </AnimatePresence>
    <span className="animated-label">{label}</span>
  </div>
);

const AnimatedCountdown = ({ time }) => {
  return (
    <div className="animated-countdown">
      <AnimatedUnit value={time.years} label="Years" />
      <AnimatedUnit value={time.months} label="Months" />
      <AnimatedUnit value={time.days} label="Days" />
      <AnimatedUnit value={time.hours} label="Hours" />
      <AnimatedUnit value={time.minutes} label="Min" />
      <AnimatedUnit value={time.seconds} label="Sec" />
    </div>
  );
};

export default AnimatedCountdown;
