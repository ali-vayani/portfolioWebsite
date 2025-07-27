"use client"
import About from "@/components/sections/About";
import MyStats from "@/components/sections/MyStats";
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
        className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-60 mt-5 gap-8"
      >
        <div className="lg:hidden">
          <PhotoGallery />
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-8 lg:gap-16">
          <div className="flex flex-col gap-8 lg:gap-12 order-2 lg:order-1">
            <About/>
            <MyStats/>
          </div>
          <div className="hidden lg:block order-1 lg:order-2">
            <PhotoGallery/>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
