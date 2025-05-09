import React from 'react';
import { TimelineEvent } from '@/data/data';

interface TimelineProps {
    events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <div className="flex flex-row gap-8">
            <h2 className="text-2xl font-light text-white">Timeline</h2>
            <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.25 bg-white" />
                <div className="space-y-8">
                    {events.map((event, index) => (
                        <div 
                            key={index} 
                            className="relative pl-12 group"
                            onMouseOver={(e) => {
                                const dot = e.currentTarget.querySelector('.timeline-dot') as HTMLElement;
                                const title = e.currentTarget.querySelector('.event-title') as HTMLElement;
                                if (event.hoverColor && dot) {
                                    dot.style.backgroundColor = event.hoverColor;
                                }
                                if (event.hoverBg && dot) {
                                    dot.style.border = `2px solid ${event.hoverBg}`;
                                }
                                if (event.hoverColor && title) {
                                    title.style.color = event.hoverColor;
                                }
                                if (event.hoverBg && title) {
                                    title.style.backgroundColor = event.hoverBg;
                                }
                        }}
                        onMouseOut={(e) => {
                            const dot = e.currentTarget.querySelector('.timeline-dot') as HTMLElement;
                            const title = e.currentTarget.querySelector('.event-title') as HTMLElement;
                            if (dot) {
                                dot.style.backgroundColor = 'white';
                                dot.style.border = 'none';
                            }
                            if (title) {
                                title.style.color = 'white';
                                title.style.backgroundColor = '';
                            }
                        }}
                    >
                    <div 
                        className="timeline-dot absolute left-3 top-1.5 h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-150"
                        style={{
                        backgroundColor: 'white',
                        transition: 'all 0.3s ease-in-out',
                        transform: 'translate(-1px, -1px)'
                        }}
                    />
                    
                    <div className="shadow-sm transition-all duration-300 hover:scale-[1.05] hover:shadow-lg">
                        <span className="flex flex-row gap-2 justify-between">
                            <h3 
                                className="event-title text-lg transition-colors duration-300"
                                style={{
                                color: 'white',
                                transition: 'all 0.3s ease-in-out',
                                padding: '0.25rem 0.5rem',
                                }}
                            >
                                {event.name}
                            </h3>
                            <p className="mt-1 text-sm opacity-60">{event.date}</p>
                        </span>
                        <p className="text-md font-light italic opacity-60">{event.title}</p>
                        <p className="text-md font-light opacity-60">{event.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
