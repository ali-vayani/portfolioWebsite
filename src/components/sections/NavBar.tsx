'use client'
import { Github, Linkedin } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    const navItems = [
        {path: "/", label:"home"},
        {path: "/tech", label:"tech"},
        {path: "/blog", label:"blog"},
    ]

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/50 px-4 py-4 backdrop-blur-md sm:px-8 md:px-15">
            <h1 className="text-2xl sm:text-3xl md:text-4xl w-1/3">vayani</h1>
            <div className="flex w-1/3 justify-center">
            {navItems.map((item) => {
                    return (
                        <Link
                            href={item.path}
                            key={item.path}
                            className={`text-lg sm:text-xl hover:cursor-pointer relative z-0 px-2 sm:px-4 py-1
                                ${(item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)) ? 'text-white' : 'text-white/70 hover:text-white'}`}
                        >
                        {item.label}
                        {(item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)) && (
                            <motion.div
                                layoutId="navbar-indicator"
                                className="absolute inset-0 rounded-sm -z-5 bg-neutral-800"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        </Link>
                    )
                })}
            </div>
            <div className="flex gap-2 w-1/3 justify-end">
                <a href="https://github.com/ali-vayani" target="_blank" rel="noopener noreferrer" className="z-50 transition-transform duration-200 hover:scale-110 hover:text-gray-300">
                    <Github size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
                </a>
                <a href="https://www.linkedin.com/in/ali-vayani-76a566301/" target="_blank" rel="noopener noreferrer" className="z-50 transition-transform duration-200 hover:scale-110 hover:text-blue-400">
                    <Linkedin size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
                </a>
            </div>
        </header>
    )
}