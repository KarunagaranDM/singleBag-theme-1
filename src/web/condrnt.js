import '../web/condent.css';
import pexel from '../images/pexels-photo-11178478.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const CondentSec = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
             <div className="condent-sec container ">
                <div className="rights">
                    <div className="condentHead row mb-2" >
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-inline">
                        Popular Products In the Industry!
                        </div>
                        </div>
                    <div className="condentDtls row">
                    <ul className="choco text-secondary nav d-block col-xl-5 col-lg-5 col-md-5 col-sm-10 col-xs-10 mt-4 mx-4">
                    <li><a >Milk Chocolate.</a></li>
                            <li><a> White Chocolate.</a></li>
                            <li><a>Dark Chocolate.</a></li>
                            <li><a>Semisweeet Chocolate.</a></li>
                            <li><a>Bittersweet Chocolate.</a></li>
                            <li><a>Unsweetened Chocolate (or Baking Chocolate)</a></li>
                            <li><a>Cocoa Powder</a></li>
                            <li><a>Sweet German Chocolate</a></li>
                        </ul>
                        <div className="lefts col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-10">
                    <img className="imaging card  mt-3 mb-3" style={{ width: "400px", height: "200px" }} src={pexel} />
                </div>
                    </div>
                </div>
            </div>
            <div className="reportSec text-white container">
                <div className="reportHead">WHY US..</div>
                <div class="row mt-5">
                    <div class="col-sm card">
                        <div className="card-header">Taste</div>
                        <div className="card-body">Milk chocolates often give off aromas of milk or cream, or caramel or malt. Dark chocolate aromas may be characterized by toasted nuts, roasted coffee, dried fruit or wine.</div>
                    </div>
                    <div class="col-sm card">
                    <div className="card-header">Ingeriants</div>
                    <div className="card-body">Wheat Solids (62.6%) (( Wheat Flour (Atta) (31.3%) Refined Wheat Flour (Maida) (31.3%)), Sugar, Cocoa Solids (5.4%), Minerals, Edible Vegetable Oil (Palmolein), Cereal Extract, Iodized Salt, Colour (INS 150d), Vitamins, Antioxidant (INS 320).</div>
                    </div>
                    <div class="col-sm card">
                    <div className="card-header">Delivery!</div>
                    <div className="card-body">A delivery order is an important document in 2 ways: it has full details of how the delivery will take place and, in some cases, warrants the release of a shipment from port or other authorities.</div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default CondentSec;