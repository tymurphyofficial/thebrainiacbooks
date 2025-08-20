'use client'
import { useState, useEffect } from "react";
import { IHeroWwfotm } from '../app/types';

export const HeroWwfotm = ({ background, backgroundVideo, title, subtitle, url }: IHeroWwfotm) => {
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
        style={{ backgroundImage: viewport.width < 1280 ? `url(${background.url})` : '' }}
      > 
        <video
          width='100%'
          height='100%'
          autoPlay
          loop
          muted
          poster={background.url}
          className='absolute rounded-3xl hidden xl:block'
        >
          <source src={backgroundVideo.url} type="video/mp4" />
        </video>

        <div className='flex flex-col z-10 mp-4 md:px-16 mt-14 md:mt-0 md:pt-[108px] pb-[60px] items-center justify-between w-full'>
          <img src={title.url} className='h-fit max-w-[75%]'/>
          <img src={subtitle.url} className='mt-[60px] max-w-[60%] md:max-w-[34%]'/>
          <a href={url} 
            target='__blank'
            rel="noopener noreferrer"
            className='text-white hover:text-black border-white hover:border-black border text-xl rounded-3xl bg-black hover:bg-white px-16 py-2 w-fit mt-10 hover:cursor-pointer'
          >SHOP NOW!</a>
        </div>
      </div>
    </div>
  );
}