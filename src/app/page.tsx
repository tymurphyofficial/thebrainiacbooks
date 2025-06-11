"use client";
import { getHomePage, getLibrary } from './api';
import { IHomePage, ILibrary } from './types';
import { useEffect, useState, useRef } from "react";

import { TickerBanner } from './components/tickerBanner';
import { HeroBanner } from './components/heroBanner';
import { ImageBanner } from './components/imageBanner';
import { VideoBanner } from "./components/videoBanner";
import { ReviewsBanner } from "./components/reviewsBanner";
import { AuthorBanner } from './components/authorBanner';
import { ContactForm } from "./components/contactForm";
import { Footer } from "./components/footer";


export default function Home() {
  const [pageData, setPageData] = useState<IHomePage>(); 
  const [libraryData, setLibraryData] = useState<ILibrary>();
  const signupRef = useRef(null);

  const getHomePageData = async () => {
    const homePageData = await getHomePage();
    setPageData(homePageData.data.page);
  }

  const getLibraryData = async () => {
    const libraryData = await getLibrary();
    setLibraryData(libraryData.data.library);
    console.log({ libraryData });
    
  }

  useEffect(() => {
    getHomePageData();
    getLibraryData();
  }, []);

  return (
    <div className='main'>
      {pageData && (
        <>
          <TickerBanner {...pageData.tickerBanner} />
          <HeroBanner {...pageData.heroBanner} />
          <ImageBanner />
          <VideoBanner {...pageData.videoBlock} signup={pageData.ctaSignupBlock} ref={signupRef} libraryData={libraryData}/>
          <ReviewsBanner {...pageData.reviewsCollection} />
          <Footer {...pageData.footer} />
        </>
      )}
    </div>
  );
}
