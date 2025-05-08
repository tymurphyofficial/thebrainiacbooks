import { IHeroBanner } from '../types';
import Image from 'next/image';

export const HeroBanner = ({ backgroundImage, titleImage, headerImage, figureImage }: IHeroBanner) => {

  return (
    <div className='heroBanner'>
      <Image className="heroBackground" src={backgroundImage.url} alt="background image" fill />

      <div className='heroTitleWrapper'>
        <Image src={headerImage.url} alt="Ty Murphy's Brainiac books" fill />
      </div>

      <div className='heroFigureWrapper'>
        <Image className="heroFigure" src={figureImage.url} alt="figure image" fill />
      </div>
      
      <div className='heroBookTitle'>
        <div className='heroBookTitleInner'>
          <Image src={titleImage.url} alt="Camp UFO" fill />
          <button onClick={() => window.open('https://www.amazon.com/dp/B0DTJ8ZMQ3', "_blank")}>BUY NOW!</button>
        </div>
      </div>
    </div>
  );
}