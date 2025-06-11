import { IImageBanner } from '../types';
import Image from 'next/image';

export const ImageBanner = () => {

  return (
    <div className='textBanner'>
      <h2>100% Human-Crafted Adventures</h2>
      <p>Absolutely <u>NO</u> AI is used in the writing of any Brainiac book.</p>
    </div>
  );
}