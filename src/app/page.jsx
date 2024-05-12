'use client'
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {

  useEffect(() => {
    const screen = document.getElementById("tiles");
    let columns = Math.floor(window.innerWidth / 50);
    let rows = Math.floor(window.innerHeight / 50);
  
    screen.style.setProperty("--columns", columns);
    screen.style.setProperty("--rows", rows);
  
    const createSquare = () => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      return tile;
    };
  
    const createGrid = (amount) => {
      for (let i = 0; i < amount; i++) {
        screen.appendChild(createSquare());
      }
    };
  
    const createScreen = () => {
      screen.innerHTML = "";
      createGrid(columns * rows);
    };
  
    createScreen();
  
    // Changing the square color
    const changeColor = () => {
      const allTiles = document.querySelectorAll(".tiles");
      let numberOfTiles = allTiles.length;
      let randomTileInex = Math.random() * (numberOfTiles +1);
    }


    // Handles all square resizing
    const handleResize = () => {
      columns = Math.floor(window.innerWidth / 50);
      rows = Math.floor(window.innerHeight / 50);
      screen.style.setProperty("--columns", columns);
      screen.style.setProperty("--rows", rows);
      createScreen();
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

  return (
    <div className="screen">
      <div id="tiles"></div>
      <div className="flex justify-between px-20 mt-6 w-full">
        <span className="text-3xl">résumé</span>
        <span className="text-3xl">about</span>
        <span className="text-3xl">projects</span>
      </div>
      <div className="flex flex-col text-8xl leading-snug mt-44">
        <span>
          hey, i'm <span className="font-bold">ali vayani,</span>
        </span>
        <span>
          a <span className="font-bold">computer science</span>
        </span>
        <span>
          student at <span className="font-bold">UT Austin</span>
        </span>
      </div>
      <Image
        src="/downArrow.png"
        width={50}
        height={50}
        className='downArrow'
      />
      <div class="screen-overlay"></div>
    </div>
  );
}
