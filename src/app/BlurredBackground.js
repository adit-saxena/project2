"use client";

import { motion } from "framer-motion";

const randomPosition = (max) => Math.floor(Math.random() * max);

const BlurredBackground = () => {
  const circles = [
    { id: 1, color: "rgba(0, 123, 255, 0.5)" },  // Blue
    { id: 2, color: "rgba(255, 0, 150, 0.5)" },  // Pink
    { id: 3, color: "rgba(0, 255, 100, 0.5)" },  // Green
  ];

  return (
    <div className="background-container">
      {circles.map(({ id, color }) => (
        <motion.div
          key={id}
          className="circle"
          style={{ backgroundColor: color }}
          initial={{
            top: randomPosition(70) + "vh",
            left: randomPosition(70) + "vw",
          }}
          animate={{
            top: [randomPosition(80) + "vh", randomPosition(80) + "vh"],
            left: [randomPosition(80) + "vw", randomPosition(80) + "vw"],
          }}
          transition={{
            duration: 10 + Math.random() * 5, // Random duration between 10-15s
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BlurredBackground;
