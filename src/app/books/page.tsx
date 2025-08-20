import { getBooksPage } from '../api';
import { IBookPanel } from '../types';
import { BookPanel } from '../../components/bookPanel';


export default async function page() {
  const { data: { pageBooks: { booksCollection: { items }} } } = await getBooksPage();  
  
  return (
    <div className='px-4 md:px-10 my-6 md:my-9 flex justify-center'>
      <div className='max-w-[1280px]'>
        <h1 className="uppercase font-black text-3xl mb-6">The Brainiac Library</h1>
        
        {items && items.map((item: IBookPanel, i: number) => (
          <BookPanel {...item} key={i}/>
        ))}
      </div>
    </div>
  );
}
