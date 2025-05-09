"use client"
import Projects from "@/components/sections/Cards";
import { useState } from "react";
import { projects, tech } from "@/data/data";
import Timeline from "@/components/Timeline";
import { timeline } from "@/data/data";

export default function Tech() {
  const [currSection, setCurrSection] = useState("projects");

  return (
    <div className="bg-black -z-10">
      <div className="flex flex-col px-60 mt-20 justify-center items-center">
      <Timeline events={timeline} />
        <div className="flex flex-col text-lg gap-2 mb-6 w-full mt-10">
          <span className="flex flex-row gap-4 text-lg">
            <h2 
              onClick={() => setCurrSection("projects")}
              style={{ cursor: 'pointer' }}
              className={`${currSection === "projects" ? "text-white" : "text-white/50 hover:text-white transition-colors duration-200"}`}
            >
              projects
            </h2>
            <h2 
              onClick={() => setCurrSection("technologies")}
              style={{ cursor: 'pointer' }}
              className={`${currSection === "technologies" ? "text-white" : "text-white/50 hover:text-white transition-colors duration-200"}`}
            >
              technologies
            </h2>
          </span>
          <span className="w-full h-[1px] bg-white opacity-50"></span>
        </div>
        { currSection === "projects" ? <Projects cards={projects}/> : <Projects cards={tech}/>}
      </div>
    </div>
  );
}
