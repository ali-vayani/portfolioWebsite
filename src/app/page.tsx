'use client'
import { useEffect } from "react";
import Image from "next/image";
import DashedLine from "./components/dashedLine";
import MeetCard from "./components/meetCard";
import AnimatedSVG from "./components/animatedSVG";
import ProjectCard from "./components/projectCard";
import WavySVG from "./components/WavySVG";

export default function Home() {

  useEffect(() => {
    const snapContainer = document.getElementById('snap-container');
    const projectsSection = document.getElementById('projects-section');

    const handleScroll = () => {
        if (!projectsSection || !snapContainer) return; // Early return if projectsSection is null

        const projectsSectionTop = projectsSection.offsetTop;
        const scrollPosition = snapContainer.scrollTop;
        

        if (scrollPosition >= projectsSectionTop) {
            snapContainer.classList.remove('snap-y', 'snap-mandatory');
        } else {
            snapContainer.classList.add('snap-y', 'snap-mandatory');
        }
    };

    if (snapContainer) {
        snapContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
        if (snapContainer) {
            snapContainer.removeEventListener('scroll', handleScroll);
        }
    };
}, []);


  return (
    <div id="snap-container" className="h-screen w-full flex flex-col snap-y snap-manditory overflow-y-scroll">
        <div className="opacity-30 fixed h-full w-full -z-10">
          <Image
            src="/static.png"
            fill={true}
            alt=""
          />
        </div>
      {/* this does the side bar scrolling thing */}

      
      <div className="w-40 h-full fixed test"></div>


      <DashedLine/>
      <h1 className="text-text text-3xl fixed p-6">vayani</h1>
      <section className="flex flex-col min-h-screen snap-start snap-always relative">
        <div className="w-full h-full flex flex-col justify-center pl-48">
          <h1 className="text-text text-7xl mb-6">Hey! I’m <span className="text-accent">Ali</span>!</h1>
          <h3 className="text-text text-5xl mb-6">Building <span className="text-accent">innovative</span> tech <span className="text-accent">solutions</span>,<br/> <span className="text-accent">one line</span> of code at a time.</h3>
          <button className="px-5 py-2 bg-accent text-background rounded-lg text-2xl w-40 mt-3">Welcome!</button>
          <AnimatedSVG/>
        </div>
      </section>

      <section className="flex flex-col min-h-screen relative snap-start snap-always">
        <div className="w-full h-full flex flex-col justify-center pr-36 items-end">
          <h1 className="text-text text-7xl mb-12"><span className="text-accent">About</span> Me!</h1>
          <p>
            Hey! I’m Ali, a freshman at <span className="text-accent">UT Austin</span> where I&apos;m studying <span className="text-accent">Computer Science</span>. My journey has taken me from binge-learning cutting-edge technologies to developing websites that make people&apos;s lives easier.
            <br/><br/>
            Outside of coding, you’ll find me enjoying the <span className="text-accent">simple</span> pleasures of life, whether that&apos;s indulging my massive sweet tooth or making memories with friends and family. I <span className="text-accent">thrive</span> on humor and good vibes, always trying to make the mood <span className="text-accent">light</span>. Despite my lighthearted approach, I value the lessons learned from life’s <span className="text-accent">heavier moments</span>.
          </p>
          <WavySVG/>
        </div>
      </section>
      
      <section id="projects-section" className="flex flex-col mb-20 snap-start">
        <div className="w-full h-full flex flex-col justify-start pl-48 mt-48">
          <h1 className="text-text text-7xl mb-24">Check Out My <span className="text-accent">Projects</span>!</h1>
          <div className="w-full flex justify-center items-center">
            <div className='grid grid-cols-3 gap-4 w-2/3'>
              <ProjectCard
                imagePath={"/TheHeatLogo.png"} 
                title={"The Heat Ordering Platform"} 
                blurb={"Developed ordering platform for school cafeteria & admin panel to edit menu items"} 
                techStack={["next.js", "firebase"]}
                comingSoon={false}
                key={0}
              />
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]} key={1}/>
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]} key={2}/>
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]} key={3}/>
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]} key={4}/>
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]} key={5}/>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col min-h-[40vh] text-text pl-48 relative ">
        <h3 className="text-5xl">Have <span className="text-accent">Questions</span>?</h3>
        <h2 className="text-7xl absolute bottom-[7rem]"> hello@<span className="text-accent">vayani</span>.dev</h2>
        <h1 className="text-[16rem] text-text/10 absolute bottom-0 right-10">vayani</h1>
      </div>
    </div>
  );
}
