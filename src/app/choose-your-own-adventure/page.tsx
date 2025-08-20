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
      <div className='max-w-[1280px] w-full h-full'>    

        <div 
          className='flex justify-center text-3xl md:text-5xl font-black w-full h-[300px] md:h-[325px] mb-20 md:mb-24 bg-center bg-cover rounded-3xl border border-black' 
          style={{ backgroundImage: `url(${bannerTop.url})` }}
        >
          <div className='flex flex-col p-8 md:p-16 items-center w-full'>
            The Choice Is Yours!
          </div>
        </div>

        {pageBannersCollection.items && pageBannersCollection.items.map((item: IBannerLarge, i: number) => (
          <div className='flex flex-col items-center mb-20 md:mb-24'>
            <div className='text-center text-base md:text-2xl max-w-3xl mb-10 md:mb-14'>{item.title}</div>
            
            <div 
              className='flex w-full h-[380px] md:h-[600px] bg-center bg-cover rounded-3xl overflow-hidden border border-black' 
              style={{ backgroundImage: `url(${item.banner.url})` }}
            ></div>
          </div>
        ))}

        <h2 className='text-center text-3xl uppercase font-black'>Heed the call to Adventure!</h2>

        <div className='flex flex-col md:flex-row gap-6 mb-9 w-full max-w-[1280px] items-center justify-center mt-12'>
          {cyoaBookTiles.map((item: IBookTile, i: number) => (
            <BookTile {...item} key={i}/>
          ))}
        </div>
        
      </div>
    </div>
  );
}
