"use client";
import Image from "next/image";

import BookPlanet from '../../public/assets/book-planet.png';
import BookMoon from '../../public/assets/book-moon.png';
import BrainiacBooksMoon from '../../public/assets/brainiac-books-moon.png'
import Author from '../../public/assets/author.png';
import AmazonBtn from '../../public/assets/amazon-btn.png'
import Mask2 from '../../public/assets/mask2.png'
import LogoInstagram from '../../public/assets/logo-instagram.png';
import LogoTiktok from '../../public/assets/logo-tiktok.png';
import LogoYoutube from '../../public/assets/logo-youtube.png'
import EmbarkOnCopy from '../../public/assets/embark-on-copy.png';
import WeAreNotAloneCopy from '../../public/assets/we-are-not-alone.png'; 
import { productUrls } from './utils';


export default function Home() {
  const instagramUrl = "https://www.instagram.com/tymurphybooks";
  const youtubeUrl = "https://www.youtube.com/@tylermurphy8963";
  const tiktokUrl = "https://www.tiktok.com/@tymurphyofficial"; 

	const getSocials = () => (
		<div className='socials'>
			<a target="_blank" href={instagramUrl} rel="noopener noreferrer">
				<Image src={LogoInstagram} alt=''/>
			</a>
			<a target="_blank" href={youtubeUrl} rel="noopener noreferrer">
				<Image src={LogoYoutube} alt=''/>
			</a>
				<a target="_blank" href={tiktokUrl} rel="noopener noreferrer">
				<Image src={LogoTiktok} alt=''/>
			</a>
		</div>
	);

  return (
    <div className='app'>
      <div className='main'>
        <nav>
          <Image className='logo' src={BrainiacBooksMoon} alt=''/>
          <Image className='authorName mobileHidden' src={Author} alt=''/>
        </nav>
        
        <div className='section'>
					<h1 className='mobileHidden'>THE LATEST BY TY MURPHY</h1>
          <div className='sectionFront'>
						<Image className='bookCover' src={BookMoon} alt=''/>

						<div className='bookInfo'>
							<h2 className='mobileHidden'>What We Found On The Moon</h2>
              <p className='subheader'>Book 1 of the <Image className="" src={WeAreNotAloneCopy} alt=''/> series.</p>

              <div className="mobileHidden">
                <p>The Youth Space Program is the most ambitious project in the world: train the youngest people in history to walk on the Moon.</p>
                <p>Billy Robinson has dreamt of space for his entire short life. A brilliant, shy twelve-year-old kid, everything completely changes when -- to his surprise -- he is accepted into the space program!
                Eight weeks competing against the most ambitious and ruthless youths in the country is going to take everything that he has.</p>
                <p>But will it be enough for what Billy finds when he gets there?</p>
              </div>
							
							<div className='buttonAlign'>
								<a target="_blank" href={productUrls.us.wwfotm} rel="noopener noreferrer">
									<Image className='amazonbtn' src={AmazonBtn} alt='What We Found On The Moon'/>
								</a>
							</div>
						</div>
          </div>

          <div className='vidContainer'>
            <Image src={Mask2} alt=''/>
            <video loop autoPlay muted>
              <source src="./assets/earth-behind-moon-vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className='section cyoa'>
        <Image src={EmbarkOnCopy} className='imgTitle mobileHidden' alt=''/>
          <div className='sectionFront'>

						<div className='bookInfo'>
							<h2 className='mobileHidden'>The Missing Planet</h2>
							<div className='subheader'>A BRAINIAC Choose-Your-Own-Adventure</div>

              <div className="mobileHidden">
                <p>A murky jungle with winding paths. A parched desert with mysteries beneath the sands. A treacherous ocean with the apocalypse at hand. Three different worlds, each more dangerous than the last! Still, that question mark makes you wonder: Is there a fourth planet out there somewhere?</p>
                <p>YOUR FATE IS IN YOUR HANDS!</p>
                <p>Think critically, make smart decisions, solve many challenging puzzles and you will return victorious with your missing father and the discovery of who you really are. Act hastily, choose poorly, and you may not return at all…</p>
                <p>Are YOU up for the challenge?</p>
              </div>

							<div className='buttonAlign'>
								<a target="_blank" href={productUrls.us.cyoaPlanet} rel="noopener noreferrer">
									<Image className='amazonbtn' src={AmazonBtn} alt=''/>
								</a>
							</div>
						</div>
            <Image className='bookCover' src={BookPlanet} alt='The Missing Planet'/>
          </div>
      </div>

      <footer>
        <p>Copyright © Ty Murphy 2024</p>
      </footer>
    </div>
  );
}
