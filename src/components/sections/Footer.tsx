'use client'
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/ali-vayani',
            icon: <FaGithub size={20} />,
            color: 'hover:text-gray-400'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/ali-vayani',
            icon: <FaLinkedin size={20} />,
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            url: 'mailto:ali.vayani@utexas.edu',
            icon: <FaEnvelope size={20} />,
            color: 'hover:text-red-400'
        },
        {
            name: 'Spotify',
            url: 'https://open.spotify.com/user/3xv7snxs9kpffyb00n3a7n5i9',
            icon: <FaSpotify size={20} />,
            color: 'hover:text-green-400'
        }
    ];

    return (
        <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Left side - Name and tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white text-lg font-semibold">ali vayani</h3>
                        <p className="text-white/60 text-sm mt-1">building the future, one line at a time</p>
                    </div>

                    {/* Center - Social links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-white/70 transition-all duration-200 ${link.color} hover:scale-110`}
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Right side - Copyright */}
                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-white/60 text-sm">
                            © {currentYear} ali vayani. all rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 