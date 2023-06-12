import '../web/bodySec.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImPlay2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const BodySec = () => {
    return (
        <>
           <Link><div className="Body-Sec container mt-5 position-absolute d-flex">
                <div className="sec-1">
                    <div className="Heading-1 text-white ">WELCOME TO <span className="text-warning">CHOCOLATE WORD!</span></div>
                    <div className="Heading-2 text-white">Delivering great Choclates for more than 18 years!</div>
                    <div className=" link-sec d-flex mx-3 px-3">
                        <div className="link-1"><a className="text-decoration-none text-white" href="#">OUR MENU</a></div>
                        <div className="link-2"><a className="text-decoration-none text-white" href="#">BOOK ORDER</a></div>
                    </div>
                </div>
                <div className="sec-2 float-end">
                    <div className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                        <a className="player text-decoration-none text-white mx-5 " href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"><ImPlay2 /></a>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}
export default BodySec;