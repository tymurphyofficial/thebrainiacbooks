import { IHeroNewestRelease } from '../app/types';

export const HeroNew = ({ background, title, url }: IHeroNewestRelease) => {

  if (!background) return;

  return (
    <div className='flex flex-col px-4 md:px-10 my-6 md:my-9 h-[400px] sm:h-[560px] md:h-[720px] overflow-hidden'>
      <div 
        className='flex self-center w-full h-full max-h-[720px] max-w-[1280px] bg-center bg-cover rounded-3xl hover:brightness-[120%] transition-all ease-in' 
        style={{ backgroundImage: `url(${background?.url})` }}
      >
        <div className='flex flex-col justify-center p-8 md:p-16 items-center max-w-full lg:max-w-[60%]'>
          <img src={title?.url} className='h-fit'/>
          <a href={url} 
            target='__blank'
            rel="noopener noreferrer"
            className='text-[#acf6f6] font-bold hover:text-black border-white hover:border-black border text-xl rounded-3xl bg-black hover:bg-[#acf6f6] px-16 py-2 w-fit mt-20 hover:cursor-pointer'
          >GET NOW!</a>
        </div>
      </div>
    </div>
  );
}