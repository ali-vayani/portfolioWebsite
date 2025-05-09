"use client"
import ProjectCard from "../InfoCard";
import { projects, tech } from "@/data/data";
import { motion } from "framer-motion";
import { CardInfo } from "@/data/data";

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
    return (
        <div className="w-full">
            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
                {cards.map((project, index) => (
                    <motion.div key={index} variants={item}>
                        <ProjectCard card={project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
