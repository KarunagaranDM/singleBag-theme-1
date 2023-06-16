import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../images/c-1.jpeg';


const SliderPro = ()=>{
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite loop
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        responsive: [
          {
            breakpoint: 1024, // Adjust settings for screens smaller than 1024px
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // Adjust settings for screens smaller than 768px
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
    
    return(
        <>
    <Slider {...settings}>
      <div>
        <div>
            <img src={slider1}/>
        </div>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      {/* Add more slides as needed */}
    </Slider>

        </>
    )
}
export default SliderPro;