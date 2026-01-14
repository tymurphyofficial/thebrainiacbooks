import { getHomePage } from './api';
import { HeroNew } from '../components/heroNew';
import { VideoHeroCampUfo } from '@/components/videoHeroCampUfo';

export default async function Home() {
  const { data: { page } } = await getHomePage();
  
  return (
    <div className='main'>
      {page && (
        <>
          <HeroNew {...page.heroNewestRelease} />
          <VideoHeroCampUfo {...page.videoHeroCampUfo} />
        </>
      )}
    </div>
  );
}
