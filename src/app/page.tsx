"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";

import BookPlanet from '../../public/assets/book-planet.png';
import BookMoon from '../../public/assets/book-moon.png';
import BrainiacBooks from '../../public/assets/brainiac-books.png'
import BrainiacBooksMoon from '../../public/assets/brainiac-books-moon.png'
import Author from '../../public/assets/author.png';
import AmazonBtn from '../../public/assets/amazon-btn.png'
import Mask2 from '../../public/assets/mask2.png'
import CopyEmbark from '../../public/assets/copy-embark.png';
import CopyCosmic from '../../public/assets/copy-cosmic.png';
import CopyAdventure from '../../public/assets/copy-adventure.png';
import RocketIcon from '../../public/assets/icon-rocket.png';
import Brain from '../../public/assets/brain.png';
import Frame from '../../public/assets/frame.png';
// import SpeakerPlay from '../../public/assets/icon-speaker-play.png';
// import Speaker from '../../public/assets/icon-speaker.png'
import Headshot from '../../public/assets/headshot.png';
import TitleArtwork from '../../public/assets/artwork.png';
import TitleArtworkMoon from '../../public/assets/artwork-moon.png';
import TitleAuthor from '../../public/assets/titleAuthor.png'
import TitleAuthorMoon from '../../public/assets/author-moon.png';
import IconClose from '../../public/assets/icon-close.png';
import LogoInstagram from '../../public/assets/logo-instagram.png';
import LogoTiktok from '../../public/assets/logo-tiktok.png';
import LogoYoutube from '../../public/assets/logo-youtube.png'


export default function Home() {
  const [visible, setVisible] = useState(false);
  // const [isPlay, setIsPlay] = useState(false);
  // const [audio, setAudio] = useState(null)

  // const [screenWidth] = useState(window.innerWidth);
  const [contentType, setContentType] = useState('SYNOPSIS');
  const [activeBook, setActiveBook] = useState('PLANET');
  const [lastActiveBook, setLastActiveBook] = useState('MOON');
  const [backgroundVideo, setBackgroundVideo] = useState("./assets/space-loop.mp4");
  const productUrl = "https://www.amazon.ca/dp/B0D9P5ZJBB/ref=sr_1_9?dib=eyJ2IjoiMSJ9.WAf-yxkuQ-BjNeY6TXY18Z1Zb5BeU5dYq1NIyo9rykLk7NngDtfDWl9L_KfvRofAaRwi75dP4Kaxdk6QeXggBGRGLGLDVj-aib0CX8pzRRZF7YG5JJxmuXxM1FIaOGb6_dIXmj3oJNF3-2xxPnKH-VtVhAwG4P6xSLMfGeult_X2QQAhsikbXSAhOoHGYuBY7i84TIQA_bWz5wRy7SdyuA.56XncXdW6bu9clgEv24lSQbcSWVrj5iyfspVxqZF25o&dib_tag=se&keywords=ty+murphy&qid=1721328865&sr=8-9";
  const instagramUrl = "https://www.instagram.com/tymurphybooks";
  const youtubeUrl = "https://www.youtube.com/@tylermurphy8963";
  const tiktokUrl = "https://www.tiktok.com/@tymurphyofficial"; 


  useEffect(() => {
    setContentType('SYNOPSIS');
    // setTimeout(() => {
    //   if (screenWidth > 768) {
    //     setVisible(true);
    //   }
    // }, 1500)
  }, []);

  // useEffect(() => {
  //   setAudio(new Audio('./assets/our_new_world.mp4')) // only call client
  // }, []);

  const setContent = (type: string) => {
    setContentType(type);
    setVisible(true);
  }

  // const playMusic = () => {
  //   !isPlay ? audio.play() : audio.pause();
  //   setIsPlay(!isPlay);
  // }

  const getContentSynopsis = () => (
    <div className={contentType == 'SYNOPSIS' ? 'show' : 'hide'}>
      <div className='slideoutHeader'>
        <Image className='headerImgA' src={CopyEmbark} alt=''/>
        <Image className='headerImgB' src={CopyCosmic} alt=''/>
        <Image className='headerImgC' src={CopyAdventure} alt=''/>
      </div>

      <div className='slideoutBody'>
        <p>Your Dad — the genius inventor — has gone missing!</p>
        <p>On the wall of his workshop are three strange words and… a question mark? You say the first word and suddenly find yourself rocketing across the cosmos in a mysterious, egg-shaped alien spaceship!</p>
        <p>A murky jungle with winding paths. A parched desert with mysteries beneath the sands. A treacherous ocean with the apocalypse at hand.</p>
        <p><b>Three different worlds</b>, each more dangerous than the last! Still, that question mark makes you wonder: <i>Is there a fourth planet out there somewhere?</i></p>
        <p className='alignCenter'>YOUR FATE IS IN YOUR HANDS!</p>
        <p>Think critically, make smart decisions, solve many challenging puzzles and you will return victorious with your missing father and the discovery of who you really are.</p>
        <p>Act hastily, choose poorly, and you may not return at all…</p>
        <p>Are <b>YOU</b> up for the challenge?</p>
      </div>
    </div>
  );

  const getContentAuthor = () => (
    <div className={contentType == 'AUTHOR' ? 'author show' : 'author hide'}>
      <h4>ABOUT THE</h4>
      <Image className='authorTitle' src={getTitleAuthor()} alt=''/>
      <Image className='authorHeadshot' src={Headshot} alt=''/>
      <div className='authorContent'>
        <p><b>TY MURPHY</b> created <b>BRAINIAC BOOKS</b> to challenge young readers to think, all while fostering a life-long love for reading.</p>
        <p>A self-taught engineer trained in neuroscience, Ty has always been an avid reader and writer with the tendency to question the world around him.</p>
        <p>As a writer, Ty Murphy <b><i>has never</i></b> and <b><i>will never</i></b> use AI for his writing.</p>
        <p>Find Ty on his socials <b>@tymurphyofficial</b>.</p>
      </div>
    </div>
  );

  const getContentArt = () => (
    <div className={contentType == 'ART' ? 'artStillsContainer show' : 'artStillsContainer hide'}>
      <Image className='artStillsTitle' src={getTitleArtwork()} alt=''/>
      <h4>Enjoy some artwork from the book!*</h4>

      <div className='artStills'>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/zombies.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/birds.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/cloaks.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/dunes.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/earth.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/island.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/lighthouse.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/masks.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/monkeys.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/pyramid.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/river.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/smoke.mp4'} type="video/mp4" />
        </video>
        <video loop autoPlay muted>
          <source src={'./assets/animate_stills/waves.mp4'} type="video/mp4" />
        </video>

        <p>*Images in book <b><i>do not move</i></b>. This is a physical book, not a painting at Hogwarts.</p>
      </div>
    </div>
  );

  const getMusicPlayer = () => {
    return (
      <>
       {/* {isPlay && <Image src={SpeakerPlay} alt='' className='icon-speaker-play' onClick={() => playMusic()}/>}
       {!isPlay && <Image src={Speaker} alt='' className='icon-speaker' onClick={() => playMusic()}/>} */}
      </>
    );
  }

  const getColor = (): string => {
    switch (activeBook) {
      case 'PLANET':
        return '#81b6b4';
      case 'MOON':
        return '#FF5C5C';
      default:
        return '#81b6b4';
    }
  }

  const getLogo = () => {
    switch (activeBook) {
      case 'PLANET':
        return BrainiacBooks;
      case 'MOON':
        return BrainiacBooksMoon;
      default:
        return BrainiacBooks;
    }
  }

  const getTitleAuthor = () => {
    switch (activeBook) {
      case 'PLANET':
        return TitleAuthor;
      case 'MOON':
        return TitleAuthorMoon;
      default:
        return TitleAuthor;
    }
  }

  const getTitleArtwork = () => {
    switch (activeBook) {
      case 'PLANET':
        return TitleArtwork;
      case 'MOON':
        return TitleArtworkMoon;
      default:
        return TitleArtwork;
    }
  }

  const getBookCover = () => {
    switch (activeBook) {
      case 'PLANET':
        return BookPlanet;
      case 'MOON':
        return BookMoon;
      default:
        return BookPlanet;
    }
  }

  const onSetActiveBook = (book: string) => {
    setLastActiveBook(activeBook);
    setActiveBook(book)
  }

  return (
    <div className='app'>
      <div className='books'>
        {/* {lastActiveBook == 'MOON' && ( <Image className='bookSmall' src={BookMoon} alt='' onClick={() => onSetActiveBook('MOON')}/>)}
        {lastActiveBook == 'PLANET' && (<Image className='bookSmall' src={BookPlanet} alt='' onClick={() => onSetActiveBook('PLANET')}/>)} */}
      </div>

      <div className='main'>
        <Image className='logo' src={getLogo()} alt=''/>
        <Image className='authorName' src={Author} alt=''/>
        
        <div className='body'>
          <div className='bodyFront'>
            <a target="_blank" href={productUrl} rel="noopener noreferrer">
              <Image className='bookCover' src={getBookCover()} alt=''/>
            </a>
            <a target="_blank" href={productUrl} rel="noopener noreferrer">
              <Image className='amazonbtn' src={AmazonBtn} alt=''/>
            </a>

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
          </div>

          <div className='vidContainer'>
            <Image src={Mask2} alt=''/>
            {activeBook == "PLANET" && (
              <video loop autoPlay muted>
                <source src="./assets/galaxies-vid.mp4" type="video/mp4" />
              </video>
            )}
            {activeBook == "MOON" && (
              <video loop autoPlay muted>
                <source src="./assets/earth-behind-moon-vid.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
      
      <div className='slideoutContainer'>
        <div className={visible ? 'slideout slideoutMobile visible' : 'slideout slideoutMobile'}>
          <div className='toggles'>
            <div className='slideToggle'>
              <div 
                className={visible && contentType == 'SYNOPSIS' ? 'slideoutToggleButton selected' : 'slideoutToggleButton'} 
                style={{ backgroundColor: getColor() }}
                onClick={() => setContent('SYNOPSIS')}>
                <Image src={RocketIcon} alt='' className={visible && contentType == 'SYNOPSIS' ? 'slideoutIcon slideoutIconBlastoff' : 'slideoutIcon'}/>
              </div>
            </div>
            <div className='slideToggle'>
              <div 
                className={visible && contentType == 'AUTHOR' ? 'slideoutToggleButton selected' : 'slideoutToggleButton'}
                style={{ backgroundColor: getColor() }}
                onClick={() => setContent('AUTHOR')}>
                <Image src={Brain} alt='' className='slideoutIcon slideoutIconBrain'/>
              </div>
            </div>
            <div className='slideToggle'>
              <div 
                className={visible && contentType == 'ART' ? 'slideoutToggleButton selected' : 'slideoutToggleButton'} 
                style={{ backgroundColor: getColor() }}
                onClick={() => setContent('ART')}>
                <Image src={Frame} alt='' className={visible && contentType == 'ART' ? 'slideoutIcon slideoutIconFrame slideoutIconWiggle' : 'slideoutIcon slideoutIconFrame'}/>
              </div>
            </div>
          </div>

          <div className='slideoutMain'>
            <Image src={IconClose} alt='' className='iconClose' onClick={() => setVisible(false)}/>
            {getContentSynopsis()}
            {getContentAuthor()}
            {getContentArt()}
          </div>
        </div>
      </div>
    </div>
  );
}
