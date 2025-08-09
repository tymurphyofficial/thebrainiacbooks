import { IHeader } from '../types';

export const Header = ({ logo }: IHeader) => {

  
	return (
    <div className='flex justify-center border-b p-10'>
      <div className='flex justify-between items-center w-full max-w-[1280px]'>
        <a href='/'>
          <img src={logo.url} className='max-h-[46px]'/>
        </a>
       

        <div className='flex gap-3'>
          <a href='' target='__blank'>
            <img src="/assets/icon-instagram.svg" alt="icon instagram" width={24} height={24} />
          </a>
          <a href='' target='__blank'>
            <img src="/assets/icon-tiktok.svg" alt="icon tiktok" width={24} height={24} />
          </a>
          <a href='' target='__blank'>
            <img src="/assets/icon-youtube.svg" alt="icon youtube" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
	);
}