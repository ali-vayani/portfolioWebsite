import Image from "next/image";
import DashedLine from "./components/dashedLine";
import MeetCard from "./components/meetCard";
import AnimatedSVG from "./components/animatedSVG";
import ProjectCard from "./components/projectCard";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
        <div className="opacity-30 fixed h-full w-full -z-10">
          <Image
            src="/static.png"
            fill={true}
            alt=""
          />
        </div>
      {/* this does the side bar scrolling thing */}
      <div className="w-40 h-full fixed test"/>
      <DashedLine/>
      <h1 className="text-text text-3xl fixed p-6 ">vayani</h1>
      <div className="flex flex-col h-screen">
        <div className="w-full h-full flex flex-col justify-center pl-48">
          <h1 className="text-text text-7xl mb-6">Hey! I’m <span className="text-accent">Ali</span>!</h1>
          <h3 className="text-text text-5xl mb-6">Building <span className="text-accent">innovative</span> tech <span className="text-accent">solutions</span>,<br/> <span className="text-accent">one line</span> of code at a time.</h3>
          <button className="px-5 py-2 bg-accent text-background rounded-lg text-2xl w-40 mt-3">Welcome!</button>
          <AnimatedSVG/>
        </div>
      </div>

      <div className="flex flex-col h-screen">
        <div className="w-full h-full flex flex-col justify-center pr-36 items-end">
          <h1 className="text-text text-7xl mb-12"><span className="text-accent">About</span> Me!</h1>
          <p className="text-text text-2xl text-end tracking-wide leading-tight w-1/2 ">
          Hey! I’m Ali, a freshman at <span className="text-accent">UT Austin</span> where I'm studying <span className="text-accent">Computer Science</span>. My journey has taken me from binge-learning cutting-edge technologies to developing websites that make people's lives easier. 
          <br/><br/>
          Outside of coding, you’ll find me enjoying the <span className="text-accent">simple</span> pleasures of life, whether that's indulging my massive sweet tooth or making memories with friends and family. I <span className="text-accent">thrive</span> on humor and good vibes, always trying to make the mood <span className="text-accent">light</span>. Despite my lighthearted approach, I value the lessons learned from life’s <span className="text-accent">heavier moments</span>. 
          </p>
        </div>
      </div>
      
      <div className="flex flex-col h-full mb-20">
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
              />
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]}/>
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]}/>
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]}/>
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]}/>
                <ProjectCard comingSoon={true} imagePath="" title="" blurb="" techStack={[]}/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[40vh] text-text pl-48 relative">
        <h3 className="text-5xl">Have <span className="text-accent">Questions</span>?</h3>
        <h2 className="text-7xl absolute bottom-[7rem]"> hello@<span className="text-accent">vayani</span>.dev</h2>
        <h1 className="text-[16rem] text-text/10 absolute bottom-0 right-10">vayani</h1>
      </div>
    </div>
  );
}
