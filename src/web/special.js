
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../images/c-1.jpeg';
import slider2 from '../images/c-2.webp';
import slider3 from '../images/c-3.jpeg';
import '../web/special.css';
import {GiShoppingCart} from 'react-icons/gi';
import {FaHeart} from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Swal from 'sweetalert2';



const Special = ()=>{

    const handleClick = () => {
        Swal.fire('Hello!', 'Your Action Responded!', 'success');
      };
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
        <div className="container">
            <h3 className="heading">Today Special</h3><br/>
    <Slider {...settings}>
      <div>
      <div className="image-container">
      <img src={slider1} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
          <div className="logo d-flex justify-content-between">
            <a href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>Choclate Browney</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$250</h5>
          <h5>20% Offer</h5>
        </div>
      </div>
    </div>
      </div>
      <div className="image-container">
      <img src={slider2} alt="Product" />
      <div className="overlay text-center">
        <div className="overlay-content ">
        <div className="logo d-flex justify-content-between">
            <a className="cart" href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>Red Browney</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$100</h5>
          <h5>30% Offer</h5>
        </div>
      </div>
    </div>
    <div className="image-container">
      <img src={slider3} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
        <div className="logo d-flex justify-content-between">
            <a href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>Kababs</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$150</h5>
          <h5>40% Offer</h5>
        </div>
      </div>
    </div>
    <div className="image-container">
      <img src={slider1} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
        <div className="logo d-flex justify-content-between">
            <a href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>Choclate Browney</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$350</h5>
          <h5>40% Offer</h5>
        </div>
      </div>
    </div>
    <div className="image-container">
      <img src={slider1} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
        <div className="logo d-flex justify-content-between">
            <a href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>white Browney</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$150</h5>
          <h5>50% Offer</h5>
        </div>
      </div>
    </div>
      {/* Add more slides as needed */}
    </Slider>
    <Slider {...settings}>
      <div>
      <div className="image-container">
      <img src={slider1} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
          <div className="logo d-flex justify-content-between">
            <a href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>Choclate Browney</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$250</h5>
          <h5>20% Offer</h5>
        </div>
      </div>
    </div>
      </div>
      <div className="image-container">
      <img src={slider2} alt="Product" />
      <div className="overlay text-center">
        <div className="overlay-content ">
        <div className="logo d-flex justify-content-between">
            <a className="cart" href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>Red Browney</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$100</h5>
          <h5>30% Offer</h5>
        </div>
      </div>
    </div>
    <div className="image-container">
      <img src={slider3} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
        <div className="logo d-flex justify-content-between">
            <a href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>Kababs</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$150</h5>
          <h5>40% Offer</h5>
        </div>
      </div>
    </div>
    <div className="image-container">
      <img src={slider1} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
        <div className="logo d-flex justify-content-between">
            <a href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>Choclate Browney</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$350</h5>
          <h5>40% Offer</h5>
        </div>
      </div>
    </div>
    <div className="image-container">
      <img src={slider1} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
        <div className="logo d-flex justify-content-between">
            <a href="#" onClick={handleClick}><GiShoppingCart/></a>
            <a className="heart" href="#" onClick={handleClick}><FaHeart/></a> 
            </div>
          <p>white Browney</p>
          <Rating className="ratingS" name="size-small" defaultValue={4} size="small" />
          <h5>$150</h5>
          <h5>50% Offer</h5>
        </div>
      </div>
    </div>
      {/* Add more slides as needed */}
    </Slider>

        </div>
    )
}
export default Special;