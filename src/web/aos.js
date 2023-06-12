import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import slider1 from '../images/gallery-1.jpg';
import slider2 from '../images/gallery-2.jpg';
import slider3 from '../images/slider3.jpg';
import slider4 from '../images/slider4.jpg';
import '../web/aos.css';

const OrderSec = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="SliderSec">
            <div className="slider d-flex mt-lg-5 container justify-content-between ">
                <img className="card w-75 h-75 mt-3 mb-3" src={slider1} data-aos="fade-up-right" />
                <img className="card w-75 slider2 mx-2 mt-3 mb-3" src={slider2} data-aos="fade-up-left" />
            </div>
            <div className="slider2 d-flex mt-md-5 container justify-content-between">
                <img className="card w-75 h-75 mt-3 mb-3" src={slider3} data-aos="fade-up-right" />
                <img className="card w-75 slider2 mx-2 mt-3 mb-3" src={slider4} data-aos="fade-up-left" />
            </div>
        </div>
    )
}
export default OrderSec;