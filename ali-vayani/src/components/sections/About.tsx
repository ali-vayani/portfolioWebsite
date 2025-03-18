'use client'
import { TypeAnimation } from 'react-type-animation';
import React from 'react'

export default function About() {
    const experiences = [
        {
            role: "computer science",
            org: "UT Austin",
            url: "https://www.cs.utexas.edu/",
            hoverColor: "#cd6a00"
        },
        {
            role: "software engineer",
            org: "freetail hackers",
            url: "https://freetailhackers.com/",
            hoverColor: "#000000",
            hoverBg: "white"
        },
        {
            role: "incoming intern",
            org: "aramco",
            url: "https://www.aramco.com/en",
            hoverColor: "#3eb458"
        },
        {
            role: "solo developing",
            org: "mymosque",
            url: "https://github.com/ali-vayani/MyMosque",
            hoverColor: "#C8C079"
        }
    ];
    
    return (
        <div className='flex flex-col px-60 mt-20 gap-6'>
            <div className='flex flex-col'>
                <TypeAnimation
                    sequence={[
                        'hey, i\'m ali!',
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={0}
                    speed={50}
                    style={{ display: 'inline-block', fontSize: '2rem' }}
                />
                <TypeAnimation
                    sequence={[
                        'i love building impactful technologies',
                        1000,
                        'i specialize in fullstack web & app development',
                        1750,
                        'i\'m always looking for new opportunities to grow',
                        2000
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                    speed={50}
                    style={{ display: 'inline-block', fontSize: '1.125rem', color: 'rgba(255, 255, 255, .70)' }}
                    
                />
            </div>
            {<p className="w-1/2 text-white/70 text-lg">
                i'm currently studying{' '}
                {experiences.map((exp, index) => (
                    <React.Fragment key={index}>
                        <span className="text-white">{exp.role}</span> @{' '}
                        <a
                            className={`hover:text-[${exp.hoverColor}] ${exp.hoverBg ? `hover:bg-${exp.hoverBg}` : ''}`}
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {exp.org}
                        </a>
                        {index < experiences.length - 1 && (
                            index === experiences.length - 2 ? ', and ' : ', '
                        )}
                    </React.Fragment>
                ))}
            </p>}
        </div>
    )
}