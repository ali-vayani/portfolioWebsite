import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center custom-bg">
      <div className="flex justify-between px-20 mt-6 w-full">
        <span className="text-3xl">résumé</span>
        <span className="text-3xl">about</span>
        <span className="text-3xl">projects</span>
      </div>
      <div className="flex flex-col text-8xl leading-snug mt-32">
        <span>
          Hey, I'm <span className="font-bold italic">Ali Vayani</span>
        </span>
        <span>
          A <span className="font-bold italic">Computer Science</span>
        </span>
        <span>
          student at <span className="font-bold italic">UT Austin</span>
        </span>
      </div>
    </div>
  );
}
