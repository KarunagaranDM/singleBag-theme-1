import map from "../images/map.png";
import web from "../images/web.jpg";
import about from "../images/about.jpg";
import "../web/footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <div className=" FooterSec container-fluid">
      <footer class="text-center mx-4 mt-2">
        <div className="row justify-content-center mx-4" id="accordion">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
            <div class="">
              <a
                class="collapsed"
                data-bs-toggle="collapse"
                href="#collapseOne"
              >
                <img className=" card rounded-pill w-25" src={map} />
              </a>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              data-bs-parent="#accordion"
            >
              <div class="">
                <ul className="">
                  <a className="text-decoration-none" href="#">
                    guindy
                  </a>
                  <br />
                  <a className="text-decoration-none" href="#">
                    chrompet
                  </a>
                  <br />
                  <a className="text-decoration-none" href="#">
                    Tambaram
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
            <div class="">
              <a
                class="collapsed "
                data-bs-toggle="collapse"
                href="#collapseTwo"
              >
                <img className=" card rounded-pill w-25 mt-1" src={web} />
              </a>
            </div>
            <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
              <div class="card-body">
                <ul>
                  <a className="text-decoration-none" href="#">
                    <i class="fa fa-instagram" aria-hidden="true">
                      instagram
                    </i>
                  </a>
                  <br />
                  <a className="text-decoration-none" href="#">
                    <i class="fa fa-facebook" aria-hidden="true">
                      facebook
                    </i>
                  </a>
                  <br />
                  <a className="text-decoration-none" href="#">
                    <i class="fa fa-whatsapp" aria-hidden="true">
                      whatsapp
                    </i>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
            <div class="">
              <a
                class="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseThree"
              >
                <img className="card rounded-pill w-25" src={about} />
              </a>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              data-bs-parent="#accordion"
            >
              <div class="card-body">
                <a href="#">Visit</a>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-xs-8">
            <p className="text-white">Bootstrap theme made by @CR7</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-8">
            <a href="#" data-toggle="tooltip" title="Visit w3schools">
              www.bloodysweet.com
            </a>
          </div>
        </div>
      </footer>
      <br />
      <div className="tagLinks row justify-content-between">
        <div className="left col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <ul className=" ">
            <li className="mt-2">
              <a className="text-decoration-none " href="#">
                @Instagram.com
              </a>
            </li>
            <li className="mt-2">
              <a className="text-decoration-none" href="#">
                @LinkedIn.com
              </a>
            </li>
            <li className="mt-2">
              <a className="text-decoration-none" href="#">
                @Facebook.com
              </a>
            </li>
            <li className="mt-2">
              <a className="text-decoration-none" href="#">
                @whatsapp.com
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div><a href="#" className="text-decoration-none">Designed by @SingleBag</a></div>
          <div><a href="#" className="text-decoration-none">Contact:+91 896458335</a></div>
        </div>
        </div></div>
  );
};
export default Footer;
