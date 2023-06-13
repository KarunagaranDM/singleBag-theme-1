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
        <div className="Location container mt-5">
        <a className="btn btn-primary text-white" href="#" onClick={clickHandler}>Find Us..</a>
        <img className="mapImg" src={map}/>
        </div>
        </>
    )
}
export default MapSec;