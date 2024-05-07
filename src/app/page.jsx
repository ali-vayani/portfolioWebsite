'use client'
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {


  // return (
  //   <div className="w-full h-full flex flex-col justify-top items-center custom-bg screen">
  //     <div class="screen">  
  //           <div class="screen-overlay"></div>
  //           <div className="w-full h-full flex flex-col justify-top items-center custom-bg">
          
  //         <div className="flex justify-between px-20 mt-6 w-full">
  //           <span className="text-3xl">résumé</span>
  //           <span className="text-3xl">about</span>
  //           <span className="text-3xl">projects</span>
  //         </div>
  //         <div className="flex flex-col text-8xl leading-snug mt-32">
  //           <span>
  //             Hey, I'm <span className="font-bold italic">Ali Vayani</span>
  //           </span>
  //           <span>
  //             A <span className="font-bold italic">Computer Science</span>
  //           </span>
  //           <span>
  //             student at <span className="font-bold italic">UT Austin</span>
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div className="screen">

      <div className="flex justify-between px-20 mt-6 w-full">
        <span className="text-3xl">résumé</span>
        <span className="text-3xl">about</span>
        <span className="text-3xl">projects</span>
      </div>
      <div className="flex flex-col text-8xl leading-snug mt-44">
        <span>
          Hey, I'm <span className="font-bold italic text-customPurple">Ali Vayani</span>
        </span>
        <span>
          A <span className="font-bold italic text-customGreen">Computer Science</span>
        </span>
        <span>
          student at <span className="font-bold italic text-customOrange">UT Austin</span>
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
