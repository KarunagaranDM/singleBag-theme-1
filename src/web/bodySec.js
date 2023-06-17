import '../web/bodySec.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImPlay2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import {FaSearchengin} from 'react-icons/fa';
import Swal from 'sweetalert2';

const BodySec = () => {

const handleClick = ()=>{
    Swal.fire('Hello!', 'Welcome To One Family!', 'success');
}

    return (
        <div className='rooting'>
        <div className="SearchBar row justify-content-end">
                <input className="inputSec col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4" type="text" placeholder='Search..'/>
                <button className="buttonSec col-xl-1 col-lg-1 col-md-1 col-sm-2 col-xs-2"><FaSearchengin/></button>
                </div>
                <Link><div className="Body-Sec container  position-absolute ">
               <div className="row">
                <div className="Heading-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-white">
                    WELCOME TO <span className="text-warning">CHOCLATE WORLD!</span></div>
                    <div className="row">
                    <div className="Heading-2 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 text-white">
                        Delivering great Choclates for more than 18 years!
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-1 col-xs-1 ">
                    <div className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                        <a className="player text-decoration-none text-white mx-5 " class="glightbox play-btn" href="https://www.youtube.com/watch?v=0nldexQeBR0"><ImPlay2 /></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex mt-4 mx-4">
                       <Link to="/menu"><div className="link-1"><a className="btn  text-decoration-none text-secondary" href="#">OUR MENU</a></div></Link>
                        <Link to="/form"><div className="link-2"><a className="btn text-decoration-none text-secondary" href="#" onClick={handleClick}>JOIN US..</a></div></Link>
                    </div>
                </div>
               </div>
            </div>
            </Link>
        </div>
    )
}
export default BodySec;