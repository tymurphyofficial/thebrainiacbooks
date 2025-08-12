import { getHomePage } from './api';
import { HeroNew } from './components/heroNew';
import { BannerSimple } from './components/bannerSimple';
import { PanelTrio } from './components/panelTrio';
import { HeroWwfotm } from './components/heroWwfotm';


export default async function Home() {
  const { data: { page } } = await getHomePage();
  
  return (
    <div className='main'>
      {page && (
        <>
          <HeroNew {...page.heroNewestRelease} />
          <BannerSimple {...page.simpleImageBanner} />
          <PanelTrio {...page.panelTrioCollection} />
          <BannerSimple {...page.simpleImageBanner2} />
          <HeroWwfotm {...page.heroWwfotm} />
        </>
      )}
    </div>
  );
}
