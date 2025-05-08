import { useEffect } from 'react';
import { IFaqs } from '../types';

export const FAQs = ({ items }: IFaqs) => {

  useEffect(() => {
    const el = document.getElementById('ref0');
    if (el) {
      expandSection(el);
    }
  }, []);

  const handleOnClick = (id: string) => {
    const el = document.getElementById(id);
    const els = Array.from(document.getElementsByClassName('faqBox'));
    els.forEach((element: any) => {
      if (element != el) {
        collapseSection(element)
      }
    });

    if (el) {
      document.getElementById(id)?.style.height !== '0px' ? collapseSection(el) : expandSection(el);
    }
  }

  const collapseSection = (element: HTMLElement) => {
    const sectionHeight = element.scrollHeight;
    var elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;
      requestAnimationFrame(function() {
        element.style.height = 0 + 'px';
      });
    });
    element.setAttribute('data-collapsed', 'true');
  }
  
  const expandSection = (element: HTMLElement) => {
    var sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';
    element.setAttribute('data-collapsed', 'false');
  }

  return (
    <div className='faqWrapper'>
      <h2>Frequently Asked Questions</h2>
      <div className='faqInner'>
        {items.map((faq, i) => (
          <div key={i} className='faqTileContainer' onClick={() => handleOnClick(`ref${i}`)}>
            <div className='faqTile'>
              <div className='faqQuestion'>{faq.question}</div>
              <div className="faqIcon">+</div>
            </div>

            <div className='faqBox' id={`ref${i}`} data-collapsed="true" style={{height: 0}}>
              <div className='faqAnswer'>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}