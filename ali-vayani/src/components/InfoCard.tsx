"use client"
import Image from "next/image";
import { CardInfo } from "@/data/data";
import { motion } from "framer-motion";

export default function ProjectCard({ card, isHovered }: { card: CardInfo; isHovered: boolean }) {
    return (
        <motion.div 
            className="flex flex-col rounded-lg overflow-hidden"
            animate={{
                scale: isHovered ? 1.1 : 1,
                transition: { duration: 0.2 }
            }}
        >
            <div className="relative w-full aspect-video">
                <motion.div
                    className="absolute inset-0 rounded-t-lg"
                    transition={{ duration: 0.3 }}
                />
                {card.svg ? (
                    <div 
                        className="w-full h-full flex items-center justify-center rounded-t-lg cursor-pointer relative z-10"
                        onClick={() => window.open(card.link, "_blank")}
                    >
                        {card.svg}
                    </div>
                ) : (
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover rounded-t-lg relative z-10"
                        onClick={() => window.open(card.link, "_blank")}
                        style={{ cursor: 'pointer' }}
                    />
                )}
            </div>
            <div className="pt-2 space-y-2">
                <h4 className="text-xl">{card.title}</h4>
                <p className="text-sm font-light opacity-60">{card.description}</p>
                <a 
                    href={card.link} 
                    className="text-blue-300 text-sm hover:text-blue-400 truncate block max-w-full font-light"
                    title={card.link}
                >
                    {card.link.substring(8)}
                </a>
            </div>
        </motion.div>
    )
}