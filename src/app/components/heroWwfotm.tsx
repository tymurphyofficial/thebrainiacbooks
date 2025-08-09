import { IHeroWwfotm } from '../types';

export const HeroWwfotm = ({ background, title, subtitle, url }: IHeroWwfotm) => {


  return (
    <div className='flex flex-col px-10 mb-[128px] h-[720px]'>
      <div 
        className='flex self-center w-full h-full max-w-[1280px] bg-center bg-cover rounded-3xl' 
        style={{ backgroundImage: `url(${background.url})` }}
      >
        <div className='flex flex-col px-16 pt-[108px] pb-[60px] items-center justify-between w-full'>
          <img src={title.url} className='h-fit max-w-[75%]'/>
          <img src={subtitle.url} className='mt-[60px] max-w-[34%]'/>
          <a href={url} 
            className='text-[#D7FFDE] border-2 font-bold text-xl rounded-3xl bg-black px-16 py-2 w-fit mt-10'
          >SHOP NOW!</a>
        </div>
      </div>
    </div>
  );
}