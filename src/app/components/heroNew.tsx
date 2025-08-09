import { IHeroNewestRelease } from '../types';

export const HeroNew = ({ background, title, url }: IHeroNewestRelease) => {


  return (
    <div className='flex flex-col px-10 my-9 h-[720px]'>
      <div 
        className='flex self-center w-full h-full max-h-[720px] max-w-[1280px] bg-center bg-cover rounded-3xl' 
        style={{ backgroundImage: `url(${background.url})` }}
      >
        <div className='flex flex-col p-16 items-center max-w-full lg:max-w-[60%]'>
          <img src={title.url} className='h-fit'/>
          <a href={url} 
            className='text-[#D7FFDE] border-2 font-bold text-xl rounded-3xl bg-black px-16 py-2 w-fit mt-20'
          >SHOP NOW!</a>
        </div>
      </div>
    </div>
  );
}