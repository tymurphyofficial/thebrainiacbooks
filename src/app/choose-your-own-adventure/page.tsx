import { BookTile } from '@/components/bookTile';
import { getCyoaPage, getBookPanels } from '../api';
import { IBannerLarge, IBookTile } from '../types';


export default async function page() {  
  const { data: { pageCyoa: { bannerTop, pageBannersCollection } }} = await getCyoaPage(); 
  const { data: { releasePanelCollection }} = await getBookPanels(); 

  const bookTiles = releasePanelCollection.items as IBookTile[];
  const cyoaBookTiles = bookTiles.filter(book => book.type.toLowerCase() === 'choose-your-own-adventure');

  return (
    <div className='px-4 md:px-10 my-6 md:my-9 flex justify-center'>
      <div className='max-w-[1280px]'>        
        <img src={bannerTop.url} className='h-fit mb-24'/>
      
        {pageBannersCollection.items && pageBannersCollection.items.map((item: IBannerLarge, i: number) => (
          <div className='flex flex-col items-center mb-24'>
            <div className='text-center text-lg max-w-3xl'>{item.title}</div>
            <img src={item.banner.url} className='h-fit mt-14'/>
          </div>
        ))}

        <div className='flex flex-col md:flex-row gap-6 mb-9 w-full max-w-[1280px] items-center justify-center'>
          {cyoaBookTiles.map((item: IBookTile, i: number) => (
            <BookTile {...item} key={i}/>
          ))}
        </div>
        
      </div>
    </div>
  );
}
