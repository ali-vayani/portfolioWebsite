'use client'
import React, { useEffect } from 'react';
import "./styles.css";

const DashedLine = () => {
    useEffect(() => {
        const handleScroll = () => {
        const scrolled = window.scrollY * -1;
        const dashedLine = document.querySelector('.dashed-line') as HTMLElement;
        if (dashedLine) {
            dashedLine.style.backgroundPosition = `0 ${scrolled}px`;
        }
    };

    window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="dashed-line-container">
            <div className="dashed-line"></div>
        </div>
    );
};

export default DashedLine;
