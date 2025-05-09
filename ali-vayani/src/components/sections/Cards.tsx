"use client"
import ProjectCard from "../InfoCard";
import { motion, AnimatePresence } from "framer-motion";
import { CardInfo } from "@/data/data";
import { useState } from "react";
import Image from "next/image";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Cards({ cards }: { cards: CardInfo[] }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className="w-full relative" onMouseMove={handleMouseMove}>
            <AnimatePresence>
                {hoveredIndex !== null && cards[hoveredIndex].image != "none" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            x: mousePosition.x - 330,
                            y: mousePosition.y - 980
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="fixed pointer-events-none z-50 w-48 h-48"
                        style={{ zIndex: 50 }}
                    >
                        <Image
                            src={cards[hoveredIndex].image}
                            alt={cards[hoveredIndex].title}
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative"
                style={{ zIndex: 2 }}
            >
                {cards.map((project, index) => (
                    <motion.div 
                        key={index} 
                        variants={item}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className="relative"
                        style={{ zIndex: hoveredIndex === index ? 3 : 2 }}
                    >
                        <ProjectCard card={project} isHovered={hoveredIndex === index} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
