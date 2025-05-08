import Image from 'next/image';
import { INextNewRelease } from '../types';

export const NextNewRelease = ({ 
  title,
  superTitle,
  description,
  cta,
  url,
  discountCopy,
  discountActive,
  image,
  saleSticker,
  promoCode
 }: INextNewRelease) => {
  console.log({ promoCode });
  

  return (
    <div className='nnr-wrapper'>
      <div className='nnr'>
        <div className='nnr-coverImage'>
          {/* <Image 
            src={saleSticker.url} 
            className='saleSticker' 
            alt="sale sticker" 
            width={280} 
            height={225} 
          /> */}
          <Image 
            src={image.url}
            alt="next book image" 
            width={350} 
            height={540} 
          />
        </div>
      
        <div className='nnr-content'>
          <h4>{superTitle}</h4>
          <h2>{title}</h2>
          <div className='nnr-content-spread'>
            <p>{description}</p>
            <div className='nnr-buttonWrapper'>
              {/* <h3>COMING MARCH 1ST, 2025</h3> */}
              {/* <button>{cta}</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}