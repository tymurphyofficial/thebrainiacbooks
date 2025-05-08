import { IBook } from '../types';
import Image from 'next/image';
import ExpandIcon from '../../../public/assets/icon-expand.png';
import AmazonIcon from '../../../public/assets/icon-amazon.png';
import CaretLeft from '../../../public/assets/caret-left.png';
import CaretRight from '../../../public/assets/caret-right.png';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';

export const Book = ({
  type,
  title,
  description,
  url,
  genre,
  image,
  mediaCollection,
  isMysteryBook,
  releaseDate
}: IBook) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState(0);
  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  const openBookUrl = () => {
    window.open(url,'_blank');
  };

  const updateActiveMedia = (action: 'INC' | 'DEC') => {    
    if (action == 'INC' && activeMedia < mediaCollection.items.length - 1) {      
      setActiveMedia(activeMedia + 1);
      return;
    }
    if (action == 'DEC' && activeMedia > 0) {
      setActiveMedia(activeMedia - 1);
      return;
    }
  };

  return (
    <div className='book'>
      {!isMysteryBook && (
        <div className='bookOverlay' onClick={() => onOpenModal()}>
          <Image
            src={ExpandIcon} 
            alt="expand icon" 
            width='50' 
            height='50' 
          />
        </div>
      )}

      <Image 
        className={isMysteryBook ? 'mysteryBook' : ''} 
        src={image.url} 
        alt="banner image" 
        width='300' 
        height='464' 
      />
      
      <div className='book-type'>{type}</div>
      <div className='book-title'>{title}</div>
      
      {isMysteryBook && ( <div className='book-releaseDate'>{releaseDate}</div> )}

      {!isMysteryBook && (
        <Modal 
          open={isOpen} 
          onClose={onCloseModal} 
          center 
          styles={{ modal: {
            width: '100%', 
            backgroundColor: '#26262E',
          }}}
        >
          <div className='modalInner'>
            <div className='mediaWrapperDesktop'>
              <Image 
                className='iconCaretLeft' 
                src={CaretLeft} 
                alt="caret left icon"
                width='36' 
                height='36' 
                onClick={() => updateActiveMedia('DEC')}
              />
              <Image 
                className='modalImage' 
                src={mediaCollection.items[activeMedia]?.url} 
                alt="banner image" 
                width='360' 
                height='556'
              />
              <Image 
                className='iconCaretRight' 
                src={CaretRight} 
                alt="caret left icon" 
                width='36' 
                height='36' 
                onClick={() => updateActiveMedia('INC')}
              />
            </div>

            <div className='modalContent'>
              <div className='superHeaderWrapper'>
                <div className='superheader'>{type}</div>
                <div className='genre'>{genre}</div>
              </div>

              <h2>{title}</h2>

              <div className='mediaWrapperMobile'>
                <Image 
                  className='iconCaretLeft' 
                  src={CaretLeft} 
                  alt="caret left icon"
                  width='36' 
                  height='36' 
                  onClick={() => updateActiveMedia('DEC')}
                />
                <Image 
                  className='modalImage' 
                  src={mediaCollection.items[activeMedia]?.url} 
                  alt="banner image" 
                  width='360' 
                  height='556'
                />
                <Image 
                  className='iconCaretRight' 
                  src={CaretRight} 
                  alt="caret left icon" 
                  width='36' 
                  height='36' 
                  onClick={() => updateActiveMedia('INC')}
                />
              </div>

              <div className='contentBottom'>
                <p>{description}</p>

                <div className='amazonWrapper'>
                  <button onClick={() => openBookUrl()}>
                    <div className='orderNowCopy'>ORDER NOW AT</div>
                    <Image src={AmazonIcon} alt="amazon icon" width='100' height='30' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      
    </div>
  );
}