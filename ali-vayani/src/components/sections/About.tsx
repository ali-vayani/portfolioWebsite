'use client'
import { TypeAnimation } from 'react-type-animation';
import React from 'react'
import { timeline } from '@/data/data';
export default function About() {
    
    return (
        <div className='flex flex-col gap-6'>
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
            {<p className="max-w-2/3 text-white/70 text-lg">
                i'm currently studying{' '}
                {[...timeline].reverse().map((exp, index) => {
                    return (
                        <React.Fragment key={index}>
                            <span className="text-white">{exp.role}</span> @{' '}
                            <a
                                style={{
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                onMouseOver={(e) => {
                                    if (exp.hoverColor) e.currentTarget.style.color = exp.hoverColor;
                                    if (exp.hoverBg) e.currentTarget.style.backgroundColor = exp.hoverBg;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = '';
                                    if (exp.hoverBg) e.currentTarget.style.backgroundColor = '';
                                }}
                                href={exp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {exp.org}
                            </a>
                            {index < timeline.length - 1 && (
                                index === timeline.length - 2 ? ', and ' : ', '
                            )}
                        </React.Fragment>
                    )
                })}
            </p>}
        </div>
    )
}