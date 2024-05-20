'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Square from './square';

export default function Home() {

  useEffect(() => {
    let tileSize = 50;
    if(window.innerWidth < 1000)
      tileSize = 35;
    else if(window.innerWidth < 700)
      tileSize = 25;
    else if(window.innerWidth < 450)
      tileSize = 10;
    const screen = document.getElementById("tiles");
    let columns = Math.floor(window.innerWidth / tileSize);
    let rows = Math.floor(window.innerHeight / tileSize);
    let backgroundColors = ["#AD343E", "#593C8F", "#FF9505", "#00A676"];
  
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
      changeColor();
    };
  
    // Changing the square color
    const changeColor = (addRate) => {
      for(let i = 0; i < addRate; i++)
      {
        const allTiles = document.querySelectorAll(".tile");
        let numberOfTiles = allTiles.length;

        let randomTileIndex = Math.floor(Math.random() * numberOfTiles);
        let randomColorIndex = Math.floor(Math.random() * backgroundColors.length);
        allTiles[randomTileIndex].style.setProperty("background", backgroundColors[randomColorIndex]);
        allTiles[randomTileIndex].classList.add("changed");
      }
    };
  
    const removeColor = (removeRate) => {

      for(let i = 0; i < removeRate; i++)
      {
        const changedTiles = document.querySelectorAll(".changed");
        let numOfChangedTiles = changedTiles.length;
        let randomChangedTileIndex = Math.floor(Math.random() * numOfChangedTiles);
        changedTiles[randomChangedTileIndex].style.setProperty("background", "#141414");
        changedTiles[randomChangedTileIndex].classList.remove("changed");
      }
    };
  
    const changeRate = () => {
      let numColored = document.querySelectorAll(".changed").length;
      let numSquares = document.querySelectorAll(".tile").length;
      
      let addRate = Math.log(numSquares + 1 - numColored + 1);
      let removeRate = Math.log(numColored + 1);

      console.log("add: " + addRate);
      console.log("remove:"+ removeRate);
      removeColor(removeRate);
      changeColor(addRate);
  
    };
  
    createScreen();
  
    // Interval to periodically update the grid
    const intervalId = setInterval(() => {
      changeRate()
    }, 2000);
  
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
      clearInterval(intervalId);
    };
  }, []);
  
  
  

  return (
    <div className="screen">
      <div id="tiles"></div>
      <div className="flex justify-between px-20 mt-6 w-full">
        <span className="text-3xl dropShadow">résumé</span>
        <span className="text-3xl dropShadow hover:cursor-pointer" onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' });}}>about</span>
        <span className="text-3xl dropShadow hover:cursor-pointer" onClick={() => {document.getElementById('experience').scrollIntoView({ behavior: 'smooth', block: 'start' });}}>projects</span>
      </div>
      <div className="flex flex-col text-8xl leading-snug mt-64 dropShadow">
        Ali Vayani
      </div>
      <Image
        src="/downArrow.png"
        width={50}
        height={50}
        className='downArrow'
        onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' });}}
      />
      <div className='flex flex-col w-full justify-center items-center h-screen' id='about'>
        <h1 className='text-6xl mb-4'>About Me</h1>
        <span className='text-center text-xl px-32 my-2'>Hey! I’m Ali, a freshman at UT Austin where I'm studying Computer Science. My journey has taken me from binge-learning cutting-edge technologies to developing websites that make people's lives easier.</span>
        <span className='text-center text-xl px-32 my-2'>Outside of coding, you’ll find me enjoying the simple pleasures of life, whether that's indulging my massive sweet tooth or making memories with friends at 2 am. I thrive on humor and good vibes, always trying to make the mood light. Despite my lighthearted approach, I value the lessons learned from life’s heavier moments.</span>
      </div>
      <div className='flex flex-col w-full justify-center items-center h-screen mb-8' id='experience'>
        <h1 className='text-6xl mb-8'>Experience</h1>
        <div className='grid grid-cols-3 gap-4'>
          <Square 
            imagePath={"/TheHeatLogo.png"} 
            title={"The Heat Ordering Platform"} 
            blurb={"Developed ordering platform for school cafeteria & admin panel to edit menu items"} 
            techStack={["next.js", "firebase"]}
          />
          <Square comingSoon={true}/>
          <Square comingSoon={true}/>
          <Square comingSoon={true}/>
          <Square comingSoon={true}/>
          <Square comingSoon={true}/>
        </div>
      </div>

    </div>
  );
}
