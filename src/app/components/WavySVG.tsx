'use client'
import React, { useEffect, useRef } from 'react';

const WavySVG: React.FC = () => {
    const pathRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        const path = pathRef.current;
        if (path) {
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
            path.style.animation = 'drawIn 3s ease forwards';
        }
    }, []);

    return (
        <svg width="1725" height="1010" viewBox="0 0 1725 1010" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-full h-auto">
            <path 
                ref={pathRef}
                d="M-184 276C-184 276 -308.301 356.922 -151 218C6.30062 79.0778 -43.2872 799.078 155 937.5C353.287 1075.92 357.5 0.499848 769 25.9999C1180.5 51.4999 845.517 800.591 1107.5 963C1369.48 1125.41 1699.5 333 1699.5 333" 
                stroke="#b198d6" 
                strokeOpacity="0.5" 
                strokeWidth="50" 
                strokeLinecap="round"
            />
            <path 
                d="M-184 276C-184 276 -308.301 356.922 -151 218C6.30062 79.0778 -43.2872 799.078 155 937.5C353.287 1075.92 357.5 0.499848 769 25.9999C1180.5 51.4999 845.517 800.591 1107.5 963C1369.48 1125.41 1699.5 333 1699.5 333" 
                stroke="url(#pattern0_230_148)" 
                strokeOpacity="0.2" 
                strokeWidth="50" 
                strokeLinecap="round"
            />
            <defs>
                <pattern id="pattern0_230_148" patternContentUnits="objectBoundingBox" width="0.530535" height="1.06735">
                    <use xlinkHref="#image0_230_148" transform="scale(0.000518101 0.00104233)"/>
                </pattern>
            </defs>
        </svg>
    );
};

export default WavySVG;