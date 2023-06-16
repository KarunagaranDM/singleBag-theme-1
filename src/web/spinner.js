import React from 'react';
import '../web/spinner.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';

const Spinner = () => {
  return (
    <footer className="footer">
      <div className="spinner-scroll">
        <div className="spinner-scroll-content">
          {/* Add your company brands or logos here */}
          <img className="ImgSec" src={logo1} alt="Brand 1" />
          <img className="ImgSec" src={logo2} alt="Brand 2" />
          <img className="ImgSec" src={logo3} alt="Brand 3" />
          <img className="ImgSec" src={logo4}/>
          <img className="ImgSec" src={logo2}/>
          <img className="ImgSec" src={logo1}/>
          <img  className="ImgSec" src={logo3}/> 
          {/* ... and so on */}
        </div>
      </div>
    </footer>
  );
};

export default Spinner;

