import { getHomePage } from './api';
import { IHomePage } from './types';

import { TickerBanner } from './components/ticker';
import { Header } from './components/header';
import { NavBar } from './components/navbar';
import { HeroNew } from './components/heroNew';
import { BannerSimple } from './components/bannerSimple';
import { PanelTrio } from './components/panelTrio';
import { HeroWwfotm } from './components/heroWwfotm';
import { Footer } from './components/footer';


export default async function Home() {
  const { data: { page } } = await getHomePage();
  
  return (
    <div className='main'>
      {page && (
        <>
          <TickerBanner {...page.ticker} />
          <Header {...page.header} />
          <NavBar {...page.navBar} />
          <HeroNew {...page.heroNewestRelease} />
          <BannerSimple {...page.simpleImageBanner} />
          <PanelTrio {...page.panelTrioCollection} />
          <BannerSimple {...page.simpleImageBanner2} />
          <HeroWwfotm {...page.heroWwfotm} />
          <Footer />
        </>
      )}
    </div>
  );
}
