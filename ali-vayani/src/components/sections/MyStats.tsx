'use client'
import { motion } from 'framer-motion';
import React from 'react';

interface StatItem {
    label: string;
    value: string;
    description?: string;
    colorScheme: {
        primary: string;
        secondary: string;
        accent: string;
    };
}

const stats: StatItem[] = [
    { 
        label: "yap sessions", 
        value: "100+", 
        description: "probably talking about philosophy or pure nonsense",
        colorScheme: {
            primary: "from-purple-400",
            secondary: "to-pink-400", 
            accent: "via-purple-500"
        }
    },
    { 
        label: "red bulls & monsters", 
        value: "too many", 
        description: "lowkey just drink them for the flavor",
        colorScheme: {
            primary: "from-red-400",
            secondary: "to-orange-400",
            accent: "via-red-500"
        }
    },
    { 
        label: "on spotify", 
        value: "86,726 mins", 
        description: "the weeknd, the marias, weston estate, and sooo much more...",
        colorScheme: {
            primary: "from-green-400",
            secondary: "to-emerald-400",
            accent: "via-green-500"
        }
    },
    { 
        label: "cookies burned", 
        value: "~7", 
        description: "i still like to call myself a cookie connoisseur",
        colorScheme: {
            primary: "from-amber-400",
            secondary: "to-yellow-400",
            accent: "via-amber-500"
        }
    },
];

export default function MyStats() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
        >
            <h2 className="text-xl font-semibold text-white">
                some of my 2025 stats
            </h2>
            <div className="grid grid-cols-2 gap-4 max-w-md">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.3, 
                            delay: 0.5 + (index * 0.05),
                            ease: "easeOut"
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            y: -5,
                            transition: { 
                                duration: 0.2,
                                ease: "easeOut"
                            }
                        }}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Animated border glow with unique colors */}
                        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${stat.colorScheme.primary}/20 ${stat.colorScheme.accent}/20 ${stat.colorScheme.secondary}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        
                        <div className="relative z-10">
                            <motion.div 
                                className={`text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${stat.colorScheme.primary} ${stat.colorScheme.secondary} transition-all duration-300`}
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">
                                {stat.label}
                            </div>
                            {stat.description && (
                                <motion.div 
                                    className="text-xs text-white/50 mt-1 group-hover:text-white/70 transition-colors duration-300"
                                    initial={{ opacity: 0.5 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {stat.description}
                                </motion.div>
                            )}
                        </div>
                        
                        {/* Subtle shine effect with unique colors */}
                        <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent ${stat.colorScheme.primary}/20 to-transparent`} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
} 