'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import DashedLine from "./components/dashedLine";
import { Github, Linkedin } from "lucide-react";
import AnimatedSVG from "./components/animatedSVG";
import ProjectCard from "./components/projectCard";
import WavySVG from "./components/WavySVG";
import StackedImageCard from "./components/StackedImageCard";

import dealImage from "../../public/deal.png"
import froyoImage from "../../public/froyo.png"
import nycImage from "../../public/nyc.png"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [displayImages, setImages] = useState([
    nycImage,
    dealImage,
    froyoImage
  ]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const snapContainer = document.getElementById('snap-container');
    const projectsSection = document.getElementById('projects-section');

    const handleScroll = () => {
      if (!projectsSection || !snapContainer) return;

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
      window.removeEventListener('resize', checkMobile);
      if (snapContainer) {
        snapContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (isMobile) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background text-text p-6">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Please view on desktop for best experience</h1>
          <p className="text-xl">This website is optimized for larger screens.</p>
        </div>
      </div>
    );
  }


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
      <div className="fixed w-full flex justify-between items-center p-6 z-50">
        <h1 className="text-text text-3xl">vayani</h1>
        <div className="flex space-x-4">
          <a href="https://github.com/ali-vayani" target="_blank" rel="noopener noreferrer" className="z-50">
            <Github className="text-text hover:text-accent z-10" size={32} />
          </a>
          <a href="https://www.linkedin.com/in/ali-vayani-76a566301/" target="_blank" rel="noopener noreferrer" className="z-50">
            <Linkedin className="text-text hover:text-accent z-10" size={32} />
          </a>
        </div>
      </div>
      <section className="flex flex-col min-h-screen snap-start snap-always relative">
        <div className="w-full h-full flex flex-col justify-center pl-48">
          <h1 className="text-text text-7xl mb-6">Hey! I’m <span className="text-accent">Ali</span>!</h1>
          <h3 className="text-text text-5xl mb-6">Building <span className="text-accent">innovative</span> tech <span className="text-accent">solutions</span>,<br/> <span className="text-accent">one line</span> of code at a time.</h3>
          <button 
            className="px-5 py-2 bg-accent text-background rounded-lg text-2xl w-40 mt-3"
            onClick={() => {
              const targetSection = document.getElementById('targetSection');
              if (targetSection) 
                targetSection.scrollIntoView({ behavior: 'smooth' });
              }
            } 
          >
            
            Welcome!
          </button>
          <AnimatedSVG/>
        </div>
      </section>

      <section id="aboutMe" className="flex flex-col min-h-screen relative snap-start snap-always">
        <div className="w-full h-full flex flex-col">
          <h1 className="text-text text-7xl mb-12 pl-48 pt-24"><span className="text-accent">About</span> Me!</h1>
          <div className="flex w-full h-full">
            <div className="w-1/2 flex items-center justify-center">
              <StackedImageCard images={displayImages}/>
            </div>
            <div className="w-1/2 flex items-center pr-36">
            <p className="text-text text-2xl text-left tracking-wide leading-tight z-10">
              Hey! I&apos;m Ali, a freshman at <span className="text-accent">UT Austin</span> where I&apos;m studying <span className="text-accent">Computer Science</span>. My journey has taken me from binge-learning cutting-edge technologies to developing websites that make people&apos;s lives easier.
              <br/><br/>
              Outside of coding, you&apos;ll find me enjoying the <span className="text-accent">simple</span> pleasures of life, whether that&apos;s indulging my massive sweet tooth or making memories with friends and family. I <span className="text-accent">thrive</span> on humor and good vibes, always trying to make the mood <span className="text-accent">light</span>. Despite my lighthearted approach, I value the lessons learned from life&apos;s <span className="text-accent">heavier moments</span>.
            </p>

            </div>
          </div>
        </div>
        <WavySVG/>
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
        <h2 className="text-4xl absolute bottom-[7rem]"> ali.<span className="text-accent">vayani</span>@utexas.edu</h2>
        <h1 className="text-[14rem] text-text/10 absolute bottom-0 right-10">vayani</h1>
      </div>
    </div>
  );
}
