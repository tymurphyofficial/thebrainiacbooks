'use client'
import { useState, useEffect } from "react";
import { IHeroBannerCampUfo } from '../app/types';

export const VideoHeroCampUfo = ({ video, image, title, url }: IHeroBannerCampUfo) => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);  

  return (
    <div className='flex flex-col px-4 md:px-10 mb-20 md:mb-[128px] h-[400px] sm:h-[560px] md:h-[720px] overflow-hidden'>
      <div 
        className='relative flex self-center w-full h-full max-w-[1280px] bg-center bg-cover hover:brightness-[130%] transition-all ease-in rounded-3xl' 
        style={{ backgroundImage: viewport.width < 1280 ? `url(${image.url})` : '' }}
      > 
        <video
          width='100%'
          height='100%'
          autoPlay
          loop
          muted
          poster={image.url}
          className='absolute rounded-3xl hidden xl:block'
        >
          <source src={video.url} type="video/mp4" />
        </video>

        <div className='flex flex-col z-10 mp-4 md:px-16 mt-14 md:mt-0 md:pt-[8rem] pb-[60px] max-w-full lg:max-w-[56%] w-full items-center'>
          <div className="flex flex-col items-center max-w-[200px] sm:max-w-[400px] lg:ml-12">
            <img src={title.url} className='h-fit'/>
            <a href={url} 
              target='__blank'
              rel="noopener noreferrer"
              className='text-[#eee8a7] hover:text-black border-white hover:border-black border text-lg sm:text-xl rounded-3xl bg-black hover:bg-[#eee8a7] px-8 sm:px-16 py-2 w-fit mt-10 hover:cursor-pointer font-bold'
            >GET NOW!</a>
          </div>
        </div>

        
      </div>
    </div>
  );
}