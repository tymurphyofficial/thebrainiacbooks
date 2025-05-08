import { IVideo } from '../types';
import Image from 'next/image';
import ReactPlayer from "react-player/lazy";
import { SignupBanner } from './signupBanner';
import { Library } from './library';

export const VideoBanner = ({ video, thumbnail, header, background, signup, ref, libraryData }: IVideo) => {
  
  return (
    <div className='videoPlayer' style={{ background: `url(${background.url})` }}>
      <div className="videoPlayerHeader">
        <Image src={header.url} alt="header image" fill />
      </div>

      {libraryData && (<Library {...libraryData} />)}
      
      {/* <div className='videoPlayerInner'>
        <ReactPlayer 
          className='reactPlayer'
          url={video.url}
          controls={true}
          width="100%"
          height="100%"
          // light={thumbnail.url}
          // playing
        />
      </div> */}
      
      {/* <SignupBanner {...signup} ref={ref}/> */}
    </div>
  );
}