import { ISimpleImageBanner } from '../app/types';

export const BannerSimple = ({ media }: ISimpleImageBanner) => {
  if (!media) return;

  return (
    <div className='flex justify-center mb-9 mx-4 md:mx-10'>
      <img src={media?.url} className='max-h-[68px] px-5' />
    </div>
  );
}