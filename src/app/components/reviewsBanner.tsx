import { IReviews } from '../types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ReviewsBanner = ({ items }: IReviews) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className='reviewsBanner'>
      <Slider {...settings}>
        {items.map((item, i) => (
          <div key={i} className='reviewCard'>
            <div className='reviewCardCopy'>{item.copy}</div>
            <div className='reviewCardName'>-{item.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}