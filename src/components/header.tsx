import { IHeader } from '../app/types';

export const Header = ({ logo }: IHeader) => {

  
	return (
    <div className='flex justify-center p-8 md:p-8'>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full max-w-[1280px]'>

        {/* <img 
          className='w-[42px] md:hidden absolute left-6 pr-4 py-4'
          src="/assets/icon-hamburger.png"
          alt="icon hamburger" 
        /> */}

        <a href='/' className='pb-8 md:pb-0'>
          <img src={logo.url} className='max-h-[80px]'/>
        </a>
       
        <div className='flex md:hidden relative gap-3'>
          <a href='https://www.instagram.com/tythebrainiac/' target='__blank'>
            <img src="/assets/icon-instagram.svg" alt="icon instagram" width={48} height={48} />
          </a>
          <a href='https://www.tiktok.com/@tythebrainiac' target='__blank'>
            <img src="/assets/icon-tiktok.svg" alt="icon tiktok" width={48} height={48} />
          </a>
          {/* <a href='https://www.youtube.com/@tythebrainiac' target='__blank'>
            <img src="/assets/icon-youtube.svg" alt="icon youtube" width={32} height={32} />
          </a> */}
        </div>

        <div className='hidden md:flex relative gap-3'>
          <a href='https://www.instagram.com/tythebrainiac/' target='__blank'>
            <img src="/assets/icon-instagram.svg" alt="icon instagram" width={32} height={32} />
          </a>
          <a href='https://www.tiktok.com/@tythebrainiac' target='__blank'>
            <img src="/assets/icon-tiktok.svg" alt="icon tiktok" width={32} height={32} />
          </a>
          {/* <a href='https://www.youtube.com/@tythebrainiac' target='__blank'>
            <img src="/assets/icon-youtube.svg" alt="icon youtube" width={32} height={32} />
          </a> */}
        </div>
      </div>
    </div>
	);
}