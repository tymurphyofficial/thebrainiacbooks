import { INavBar } from '../types';

export const NavBar = ({ navLinksCollection: { items } }: INavBar) => {

  return (
    <div className='flex justify-center border-b px-10 py-8'>
      <div className='flex w-full gap-10 max-w-[1280px]'>
        {items.map(item => (
          <a href={item.url} key={item.label} className='hover:underline'>{item.label}</a>
        ))}
      </div>
    </div>
    
  );
}