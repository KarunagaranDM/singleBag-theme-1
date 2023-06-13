import sec1 from '../images/sec1.jpeg';
import sec2 from '../images/sec2.jpeg';
import sec3 from '../images/sec3.jpeg';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../web/Product.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const ProductSec =()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return(
        <div className="ProductSec mb-5">
        <h4 className=" headerSec">Top Rated Dishes!</h4>
        <div class="row container justify-content-between ">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <img className="img1" src={sec1} data-aos="flip-left"/>
      <div className="Detls card bg-secondary">
        <div className="text-center mt-1 mb-1">Chery Browny</div>
        <hr/>
        <div ><Stack spacing={1}><Rating className="ratingS" name="size-small" defaultValue={4} size="small" /></Stack></div>
        <hr/>
        <div className="sec1 d-flex">
        <div className="rate text-center mx-5">$250</div>
        <div className="discount mx-3">20% Offer</div>
        </div>
        <hr/>
        <div><a className="link btn-primary mb-2 d-inline btn" href="#">Order Now</a></div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <img className="img2" src={sec2} data-aos="flip-left"/>
      <div className="Detls card bg-secondary">
        <div className="text-center mt-1 mb-1">Black Radish</div>
        <hr/>
        <div ><Stack spacing={1}><Rating className="ratingS" name="size-small" defaultValue={4.5} size="small" /></Stack></div>
        <hr/>
        <div className="sec1 d-flex">
        <div className="rate text-center mx-5">$350</div>
        <div className="discount mx-3">40% Offer</div>
        </div>
        <hr/>
        <div><a className=" link btn-primary mb-2 d-inline btn" href="#">Order Now</a></div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <img className="img3" src={sec3} data-aos="flip-left"/>
      <div className="Detls card bg-secondary">
        <div className="text-center mt-1 mb-1">Chaco Nakets</div>
        <hr/>
        <div ><Stack spacing={1}><Rating className="ratingS" name="size-small" defaultValue={4} size="small" /></Stack></div>
        <hr/>
        <div className="sec1 d-flex">
        <div className="rate text-center mx-5">$350</div>
        <div className="discount mx-3">30% Offer</div>
        </div>
        <hr/>
        <div><a className="link btn-primary mb-2 d-inline btn" href="#">Order Now</a></div>
      </div>
    </div>
  </div>
  <div class="row container justify-content-between mt-5  mb-5">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <img className="img1" src={sec1} data-aos="flip-left"/>
      <div className="Detls card bg-secondary">
        <div className="text-center mt-1 mb-1">Chery Browny</div>
        <hr/>
        <div ><Stack spacing={1}><Rating className="ratingS" name="size-small" defaultValue={3} size="small" /></Stack></div>
        <hr/>
        <div className="sec1 d-flex">
        <div className="rate text-center mx-5">$250</div>
        <div className="discount mx-3">20% Offer</div>
        </div>
        <hr/>
        <div><a className=" link btn-primary mb-2 d-inline btn" href="#">Order Now</a></div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <img className="img2" src={sec2} data-aos="flip-left"/>
      <div className="Detls card bg-secondary">
        <div className="text-center mt-1 mb-1">Black Radish</div>
        <hr/>
        <div ><Stack spacing={1}><Rating className="ratingS" name="size-small" defaultValue={4} size="small" /></Stack></div>
        <hr/>
        <div className="sec1 d-flex">
        <div className="rate text-center mx-5">$350</div>
        <div className="discount mx-3">40% Offer</div>
        </div>
        <hr/>
        <div><a className=" link btn-primary mb-2 d-inline btn" href="#">Order Now</a></div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <img className="img3" src={sec3} data-aos="flip-left"/>
      <div className="Detls card bg-secondary">
        <div className="text-center mt-1 mb-1">Chaco Nakets</div>
        <hr/>
        <div ><Stack spacing={1}><Rating className="ratingS" name="size-small" defaultValue={3} size="small" /></Stack></div>
        <hr/>
        <div className="sec1 d-flex">
        <div className="rate text-center mx-5">$350</div>
        <div className="discount mx-3">30% Offer</div>
        </div>
        <hr/>
        <div><a className="link btn-primary mb-2 d-inline btn" href="#">Order Now</a></div>
      </div>
    </div>
  </div>
        </div>
    )
}
export default ProductSec;