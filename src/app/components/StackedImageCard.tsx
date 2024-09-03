import React, { useState } from 'react';
import Image from 'next/image';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

interface StackedImageCardProps {
  images: any[]
}

const StackedImageCard = ({ images }: StackedImageCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const rotateRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="relative w-[350px] h-[450px] group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {images.map((src: any, index: number) => {
        const adjustedIndex = (index - currentIndex + images.length) % images.length;
        return (
          <div
            key={index}
            className={`absolute top-0 left-0 w-[350px] h-[450px] transition-all duration-300 ease-in-out ${
              hovered ? 'scale-105' : ''
            } ${
              adjustedIndex === 1
                ? `${hovered ? '-rotate-6 -translate-x-10' : '-rotate-3 -translate-x-5'}`
                : adjustedIndex === 2
                ? `${hovered ? 'rotate-6 translate-x-10' : 'rotate-3 translate-x-5'}`
                : ''
            }`}
            style={{ zIndex: 3 - adjustedIndex }}
          >
            <Image
              src={src}
              alt={`Card ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        );
      })}
      <button
        className="z-10 absolute top-1/2 left-[-60px] transform -translate-y-1/2 bg-accent text-background rounded-full w-10 h-10  flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        onClick={rotateLeft}
      >
        <IconArrowLeft/>
      </button>
      <button
        className="z-10 absolute top-1/2 right-[-60px] transform -translate-y-1/2 bg-accent text-background rounded-full w-10 h-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        onClick={rotateRight}
      >
        <IconArrowRight/>
      </button>
    </div>
  );
};

export default StackedImageCard;