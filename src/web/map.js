import map from '../images/map.jpg';
import '../web/map.css';
import { useNavigate } from 'react-router-dom';

const MapSec = ()=>{
    const navigate = useNavigate();
    function clickHandler() {
        navigate('/locate')
      }
    return(
        <>
        <div className="Location container mt-5 row">
        <a className="btn btn-primary text-white col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12" href="#" onClick={clickHandler}>Find Us..</a>
        <div className="row">
        <img className="mapImg col-xl-12 col-lg-12 col-md-8 col-sm-12 col-xs-12 " src={map}/>
        </div>
        </div>
        </>
    )
}
export default MapSec;