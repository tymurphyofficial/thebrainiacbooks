import { IHeroNewestRelease } from '../types';

export const HeroNew = ({ background, title, url }: IHeroNewestRelease) => {


  return (
    <div className='flex flex-col px-10 py-9 '>
      <div 
        className='flex self-center w-full h-[720px] max-w-[1280px] bg-center rounded-3xl' 
        style={{ backgroundImage: `url(${background.url})` }}
      >
        <div className='flex flex-col p-16 items-center'>
          <img src={title.url} className='h-fit'/>
          <a href={url} 
            className='text-[#D7FFDE] border-2 font-bold text-xl rounded-3xl bg-black px-16 py-2 w-fit mt-10'
          >SHOP NOW!</a>
        </div>
      </div>
    </div>
  );
}