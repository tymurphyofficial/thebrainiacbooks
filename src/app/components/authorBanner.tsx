import { IAuthor } from '../types';
import Image from 'next/image';

export const AuthorBanner = ({ backgroundImage, headshot  }: IAuthor) => {

  return (
    <div className='authorBanner' style={{ backgroundImage: `url(${backgroundImage.url})` }}>
      <div className='headshotWrapper'>
        <Image src={headshot.url} alt="headshot" fill />
      </div>

      <div className='authorBannerInner'>
        <div className='authorColumn'>
          <h2>About The Author</h2>
          <p>{"Ty Murphy is the author of the Brainiac books, an ever-growing collection for kids and young adults that explore all-things smart."}</p>
          <p>{"The Brainiac books are designed to challenge the reader to think critically, all while fostering a life-long love for reading. Inspired by the books of his youth, Ty hopes to educate and entertain the children of tomorrow."}</p>
        </div>
      </div>
    </div>
  );
}