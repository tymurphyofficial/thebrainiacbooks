"use client";
import { getHomePage } from './api';
import { IHomePage } from './types';
import { useEffect, useState,  } from "react";

import { TickerBanner } from './components/ticker';
import { Header } from './components/header';
import { NavBar } from './components/navbar';
import { HeroNew } from './components/heroNew';


export default function Home() {
  const [data, setData] = useState<IHomePage>(); 

  const getHomePageData = async () => {
    const { data: { page } } = await getHomePage();
    console.log({ page });
    
    setData(page);
  }

  useEffect(() => {
    getHomePageData();
  }, []);  

  return (
    <div className='main'>
      {data && (
        <>
          <TickerBanner {...data.ticker} />
          <Header {...data.header} />
          <NavBar {...data.navBar} />
          <HeroNew {...data.heroNewestRelease} />
        </>
      )}
      
    </div>
  );
}
