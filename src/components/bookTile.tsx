
import { IBookTile } from '../app/types'; 

export const BookTile = (bookTile: IBookTile) => {

  return (
    <div key={bookTile.title} className='group rounded-3xl overflow-hidden h-[604px] md:h-[796px] w-full max-w-[410px]'>
      <div 
        className='flex self-center w-full bg-center h-full max-h-[364px] md:max-h-[502px] bg-cover group-hover:brightness-[120%] transition-all ease-in' 
        style={{ backgroundImage: `url(${bookTile.background.url})` }}
      >
        <img src={bookTile.titleImage.url} className='h-fit px-5 py-10' style={{ maxWidth: `${bookTile.titleMaxWidth}` }} />
      </div>

      <div className='p-8 md:p-[50px] bg-[#444655] h-full flex flex-col items-center justify-between max-h-[240px] md:max-h-[294px]'>
        <div>
          <div className='uppercase text-center text-white font-black text-4xl'>{bookTile.title}</div>
          <div className='text-center text-white mt-2'>{bookTile.type}</div>
        </div>
        <a 
          href={bookTile.url} 
          target='__blank'
          rel="noopener noreferrer"
          className='text-black hover:text-[#EEE8A9] border border-[#EEE8A9] text-xl rounded-3xl bg-[#EEE8A9] hover:bg-black px-16 py-2 w-fit mt-6 md:mt-10 uppercase'
        >
          Shop Now
        </a>
      </div>
    </div>
  )
}