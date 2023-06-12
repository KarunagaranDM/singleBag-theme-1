import map from '../images/map.jpg';
import '../web/map.css';

const MapSec = ()=>{
    return(
        <>
        <div className="Location container mt-5">
        <a className="btn btn-primary text-white" href="#">Find Us..</a>
        <img className="mapImg" src={map}/>
        </div>
        </>
    )
}
export default MapSec;