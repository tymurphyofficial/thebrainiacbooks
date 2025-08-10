import { IHeroWwfotm } from '../types';

export const HeroWwfotm = ({ background, title, subtitle, url }: IHeroWwfotm) => {


  return (
    <div className='flex flex-col px-4 md:px-10 mb-20 md:  md:mb-[128px] h-[400px] sm:h-[560px] md:h-[720px] overflow-hidden'>
      <div 
        className='flex self-center w-full h-full max-w-[1280px] bg-center bg-cover rounded-3xl hover:brightness-[80%] transition-all ease-in' 
        style={{ backgroundImage: `url(${background.url})` }}
      >
        <div className='flex flex-col mp-4 md:px-16 mt-14 md:mt-0 md:pt-[108px] pb-[60px] items-center justify-between w-full'>
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