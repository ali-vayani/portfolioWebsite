"use client"
import Image from "next/image";
import { CardInfo } from "@/data/data";

export default function ProjectCard({ card }: { card: CardInfo }) {
    return (
        <div className="flex flex-col rounded-lg overflow-hidden">
            <div className="relative w-full aspect-video">
                {card.svg ? (
                    <div 
                        className="w-full h-full flex items-center justify-cente rounded-t-lg cursor-pointer"
                        onClick={() => window.open(card.link, "_blank")}
                    >
                        {card.svg}
                    </div>
                ) : (
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover rounded-t-lg"
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
        </div>
    )
}