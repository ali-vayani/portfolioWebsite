'use client'
import { Github, Linkedin } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    console.log(pathname)
    const [currSection, setCurrSection] = useState(pathname);
    const navItems = [
        {path: "/", label:"home"},
        {path: "/about", label:"about"},
        {path: "/work", label:"work"},
    ]

    const handleNavigate = (section: string) => {
        console.log(section)
    }

    return (
        <header className="flex items-center justify-between mx-15 mt-5">
            <h1 className="text-5xl w-1/3">vayani</h1>
            <div className="flex w-1/3 justify-center">
            {navItems.map((item) => {
                    return (
                        <Link
                            href={item.path}
                            key={item.path}
                            className={`text-xl hover:cursor-pointer relative z-0 px-4 py-1
                                ${currSection == item.path ? 'text-white' : 'text-white/70 hover:text-white'}`}
                        > 
                        {item.label}
                        {currSection == item.path && (
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
                <a href="https://github.com/ali-vayani" target="_blank" rel="noopener noreferrer" className="z-50">
                    <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/ali-vayani-76a566301/" target="_blank" rel="noopener noreferrer" className="z-50">
                    <Linkedin size={32} />
                </a>
            </div>
        </header>
    )
}