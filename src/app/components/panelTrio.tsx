import { IPanelTrioCollection } from '../types';

export const PanelTrio = ({ items }: IPanelTrioCollection) => {

  return (
    <div className='flex justify-center mb-9 mx-10'>
      <div className='flex gap-6 mb-9 w-full max-w-[1280px]'>
        {items.map(item => (
          <div key={item.title} className='rounded-3xl overflow-hidden h-[796px] w-full max-w-[410px]'>
            <div 
              className='flex self-center w-full bg-center h-full max-h-[502px] bg-cover' 
              style={{ backgroundImage: `url(${item.background.url})` }}
            >
              <img src={item.titleImage.url} className='h-fit px-5 py-10' style={{ maxWidth: `${item.titleMaxWidth}` }} />
            </div>

            <div className='p-[50px] bg-[#444655] h-full flex flex-col items-center justify-between max-h-[294px]'>
              <div>
                <div className='uppercase text-center text-white font-bold text-3xl'>{item.title}</div>
                <div className='text-center text-white'>{item.type}</div>
              </div>
              <a 
                href={item.url} 
                className='text-black text-xl rounded-3xl bg-[#EEE8A9] px-16 py-2 w-fit mt-10 uppercase'
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}