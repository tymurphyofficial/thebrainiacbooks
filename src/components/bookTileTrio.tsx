import { IBookTrioCollection } from '../app/types';
import { BookTile } from './bookTile';

export const BookTileTrio = ({ items }: IBookTrioCollection) => {

  return (
    <div className='flex justify-center mb-0 md:mb-9 mx-4 md:mx-10'>
      <div className='flex flex-col md:flex-row gap-6 mb-9 w-full max-w-[1280px] items-center'>
        {items.map(item => (
          <BookTile {...item} />
        ))}
      </div>
    </div>
  );
}