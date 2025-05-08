import { IImageBanner } from '../types';
import Image from 'next/image';

export const ImageBanner = ({ image, imageMobile }: IImageBanner) => {

  return (
    <div className='imageBanner'>
      <Image className='imageBannerDesktop' src={image.url} alt="no ai no pronouns no propaganda" fill />
      <Image className='imageBannerMobile' src={imageMobile.url} alt="no ai no pronouns no propaganda" fill />
    </div>
  );
}