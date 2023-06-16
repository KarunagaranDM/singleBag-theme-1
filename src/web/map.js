import map from '../images/map.jpg';
import '../web/map.css';
import { useNavigate } from 'react-router-dom';

const MapSec = ()=>{
    const navigate = useNavigate();
    function clickHandler() {
        navigate('/locate')
      }
    return(
        <div className="Location">
        <div className="row justify-content-center">
      <div className="image-container">
      <img className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10 " src={map} alt="Product" />
      <div className="overlay">
        <div className="overlay-content">
          <div className="logo">
            <a className=" btn btn-primary" href="#" onClick={clickHandler}>Find Us..</a>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default MapSec;