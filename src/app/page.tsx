import { getHomePage } from './api';
// import { HeroNew } from '../components/heroNew';
// import { BannerSimple } from '../components/bannerSimple';
// import { BookTileTrio } from '../components/bookTileTrio';
// import { HeroWwfotm } from '../components/heroWwfotm';
import { VideoHeroCampUfo } from '@/components/videoHeroCampUfo';

export default async function Home() {
  const { data: { page } } = await getHomePage();
  
  return (
    <div className='main'>
      {page && (
        <>
          <VideoHeroCampUfo {...page.videoHeroCampUfo} />
        </>
      )}
    </div>
  );
}
