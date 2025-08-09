import { ISimpleImageBanner } from '../types';

export const BannerSimple = ({ media: { url } }: ISimpleImageBanner) => {


  return (
    <div className='flex justify-center mb-9 mx-10'>
      <img src={url} className='h-[68px]' />
    </div>
  );
}