'use client'
import React, { useEffect, useRef } from 'react';

const AnimatedSVG: React.FC = () => {
    const pathRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (path) {
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
            path.style.animation = 'drawIn 2s ease forwards';
        }
    }, []);

    return (
        <svg width="941" height="570" viewBox="0 0 941 570" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-10 right-10 w-1/2 h-auto">
            <path 
                ref={pathRef}
                d="M292.095 98.3862L42.1509 391.238L366.677 521.361M508.178 25.2527L432.654 544.252M649.317 471.524L899.261 178.673L574.735 48.5492" 
                stroke="#b198d6" 
                strokeOpacity="0.5" 
                strokeWidth="50" 
                strokeLinecap="round"
            />
        </svg>
    );
};

export default AnimatedSVG;