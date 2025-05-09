"use client"
import About from "@/components/sections/About";
import PhotoGallery from "@/components/PhotoGallery";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black -z-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-row px-60 mt-20"
      >
        <About/>
        <PhotoGallery/>
      </motion.div>
    </motion.div>
  );
}
