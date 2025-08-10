import { ISimpleImageBanner } from '../types';

export const BannerSimple = ({ media: { url } }: ISimpleImageBanner) => {


  return (
    <div className='flex justify-center mb-9 mx-4 md:mx-10'>
      <img src={url} className='max-h-[68px] px-5' />
    </div>
  );
}