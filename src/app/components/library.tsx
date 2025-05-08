import { ILibrary } from '../types';
import { Book } from './book';

export const Library = ({ header, booksCollection }: ILibrary) => {
  return (
    <div className='library'>
      {/* <h3>{ header }</h3> */}
      {/* <div className='hr'></div> */}
      <div className='books'>
        {booksCollection.items.map((book, i) => (
          <Book key={i} {...book} />
        ))}
      </div>
    </div>
  );
}