"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
    >
      <div>
        <h1>Welcome to the Home Page</h1>
      </div>
    </motion.div>
  );
}
