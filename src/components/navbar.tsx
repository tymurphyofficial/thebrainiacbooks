'use client'
import { usePathname } from 'next/navigation';
import { INavBar } from '../app/types';

export const NavBar = ({ navLinksCollection: { items } }: INavBar) => {
  const pathname = usePathname();

  return (
    <div className='hidden md:flex justify-center border-b px-10 py-8'>
      <div className='flex w-full gap-10 max-w-[1280px]'>
        {items.map(item => (
          <a href={item.url} key={item.label} className={`hover:underline ${pathname === item.url && 'underline'}`}>{item.label}</a>
        ))}
      </div>
    </div>
    
  );
}