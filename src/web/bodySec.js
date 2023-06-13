import '../web/bodySec.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImPlay2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import {FaSearchengin} from 'react-icons/fa';

const BodySec = () => {
    return (
        <>
<<<<<<< HEAD
           <Link><div className="Body-Sec container  position-absolute ">
               <div className="row">
                <div className="Heading-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-white">
                    WELCOME TO <span className="text-warning">CHOCLATE WORLD!</span>
=======
        <div className="SearchBar">
                <input className="inputSec" type="text" placeholder='Search..'/>
                <button className="buttonSec"><FaSearchengin/></button>
                </div>
            <Link><div className="Body-Sec container mt-4 position-absolute d-flex">
                <div className="sec- mx-5">
                    <div className="Heading-1 text-white ">WELCOME TO <span className="text-warning">CHOCOLATE WORD!</span></div>
                    <div className="Heading-2 text-white">Delivering great Choclates for more than 18 years!</div>
                    <div className=" link-sec d-flex mx-3 px-3">
                        <Link className="text-decoration-none" to="/menu"><div className="link-1"><a className="text-decoration-none text-white" href="#">OUR MENU</a></div></Link>
                        <Link className="text-decoration-none" to="/order"><div className="link-2"><a className="text-decoration-none text-white" href="#">BOOK ORDER</a></div></Link>
                    </div>
>>>>>>> 4ea6a6b3cd9f0b37c21671c477f428a68fddcd98
                </div>
                <div className="row">
                    <div className="Heading-2 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 text-white">
                        Deliver the Choclate for 18 Years
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-1 col-xs-1 ">
                    <div className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                        <a className="player text-decoration-none text-white mx-5 " class="glightbox play-btn" href="#"><ImPlay2 /></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex mt-4 mx-4">
                       <div className="link-1"><a className="btn text-decoration-none text-secondary" href="#">OUR MENU</a></div>
                        <div className="link-2"><a className="btn text-decoration-none text-secondary" href="#">BOOK ORDER</a></div>
                    </div>
                </div>
               </div>
            </div>
            </Link>
        </>
    )
}
export default BodySec;