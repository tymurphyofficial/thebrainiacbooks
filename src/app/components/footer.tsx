import Image from 'next/image';
import { IFooter } from '../types';

export const Footer = ({ copy, socialsCollection }: IFooter) => {

  const { items } = socialsCollection;

  return (
    <div className="footer">
      <div className='socials'>
        {items.map((item, i) => (
          <a key={i} target="_blank" href={item.url} rel="noopener noreferrer">
            <Image src={item.icon.url} alt='' width={40} height={40} />
          </a>
        ))}
      </div>

      <div className='hr'></div>
      <p>{ copy }</p>
    </div>
  );
}