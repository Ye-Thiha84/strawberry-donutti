// components/Card.js
import React from "react";
import { motion } from "framer-motion";

const Card = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white bg-opacity-10 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg text-center w-full max-w-sm"
    >
      {children}
    </motion.div>
  );
};

export default Card;
