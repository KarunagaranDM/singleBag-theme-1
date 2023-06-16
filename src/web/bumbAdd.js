import '../web/bumb.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Import the CSS file for styling
import image1 from '../images/sec1.jpeg';
import image2 from '../images/sec2.jpeg'
import image3 from '../images/sec3.jpeg'
import image4 from '../images/slider4.jpg'




const ProductAdsSlider = () => {
    const ads = [
      { id: 1, title: '30% Offer', image: image1 },
      { id: 2, title: '40% offer', image: image2 },
      { id: 3, title: 'Buy 1 Get One!', image: image3 },
      {id: 4, title: '45% Offer', image: image4}
      // Add more ads as needed
    ];
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };
    return (
            < div className="bumbSec">
            <Slider {...sliderSettings}>
              {ads.map((ad, index) => (
                <div key={ad.id}>
                  <img className='imageSec' src={ad.image} alt={ad.title} />
                  <h4 className="hint">{ad.title}</h4>
                  {index === 0 && (
                    <div className="slider-spinner">
                      <div className="spinner"></div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
            </div>
          );
        };
  
  export default ProductAdsSlider;