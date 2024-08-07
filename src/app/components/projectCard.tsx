"use client"
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
    imagePath: string;
    title: string;
    blurb: string;
    techStack: string[];
    comingSoon: boolean;
}

export default function ProjectCard({ imagePath, title, blurb, techStack, comingSoon }: ProjectCardProps) {
    // Declare state only once at the top level
    const [inProgress, setInProgress] = useState("in the kitchen...");
    
    // Use useEffect to manage the interval if comingSoon is true
    useEffect(() => {
        if (comingSoon) {
            const interval = setInterval(() => {
                setInProgress((prev) => {
                    if (prev === "in the kitchen...") {
                        return "in the kitchen";
                    }
                    return prev + ".";
                });
            }, 1000);
            
            // Clear interval on component unmount
            return () => clearInterval(interval);
        }
    }, [comingSoon]);

    if (!comingSoon) {
        return (
            <div 
                className='border-2 bg-accent/40 flex flex-col rounded-xl border-accent/70 items-center text-center min-h-fit p-3 w-88 hover:cursor-pointer panel text-text'
                onClick={() => window.open('https://the-heat.vercel.app/', '_blank')}
            >
                <Image
                    src={imagePath}
                    width={175}
                    height={175}
                    alt=''
                />
                <h2 className='font-bold text-xl my-2'>{title}</h2>
                <h4 className='text-md w-10/12'>{blurb}</h4>
                <div className='flex flex-row w-full justify-center mt-12 mb-1 px-10'>
                {
                    techStack.map((item, index) => (
                        <React.Fragment key={index}>
                            <h6 className='extraSmall'>{item}</h6>
                            {techStack[index + 1] && <h4 className='extraSmall mx-2'>⋅</h4>}
                        </React.Fragment>
                    ))
                }
                </div>
            </div>
        )
    } else {
        return (
            <div className='border-2 bg-accent/40 flex flex-col rounded-xl border-accent/70 justify-center items-center text-center min-h-80 p-3 w-88 text-text'>
                <h2 className='font-bold text-3xl'>{inProgress}</h2>
            </div>
        )
    }
}
