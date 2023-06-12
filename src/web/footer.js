import map from '../images/map.png';
import web from '../images/web.jpg';
import about from '../images/about.jpg';
import '../web/footer.css';
  
const Footer = () => {
  return (
    < div className=" FooterSec container-fluid">
    <footer class="text-center mx-4 mt-5">
    <div className="d-flex justify-content-center mx-4" id="accordion">

<div className=" mt-5 mx-5">
  <div class="">
    <a class="collapsed" data-bs-toggle="collapse" href="#collapseOne">
      <img className=" card rounded-pill w-25" src={map}/>
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
    <div class="">
      <ul>
        <a className="text-decoration-none" href="#">guindy</a><br/>
        <a className="text-decoration-none" href="#">chrompet</a><br/>
        <a className="text-decoration-none" href="#">Tambaram</a>
      </ul>
    </div>
  </div>
</div>

<div class="mt-5 mx-5">
  <div class="">
    <a class="collapsed " data-bs-toggle="collapse" href="#collapseTwo">
      <img className=" card rounded-pill w-25 mt-1" src={web}/>
    </a>
  </div>
  <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
    <div class="card-body">
      <ul>
        <a className="text-decoration-none" href="#"><i class="fa fa-instagram" aria-hidden="true">instagram</i></a><br/>
        <a className="text-decoration-none" href="#"><i class="fa fa-facebook" aria-hidden="true">facebook</i></a><br/>
        <a className="text-decoration-none" href="#"><i class="fa fa-whatsapp" aria-hidden="true">whatsapp</i></a>
      </ul>
    </div>
  </div>
</div>

<div class="mt-5 mx-5">
  <div class="">
    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
      <img className="card rounded-pill w-25" src={about}/>
    </a>
  </div>
  <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
    <div class="card-body">
      <a href="#">Visit</a>
    </div>
  </div>
</div>

</div>
    <a class="up-arrow text-white" href="#" data-toggle="tooltip" title="TO TOP">
      <span class="glyphicon glyphicon-chevron-up text-white"></span>
    </a><br/><br/>
    <p className="text-white">Bootstrap theme made by @CR7</p> 
    <a href="#" data-toggle="tooltip" title="Visit w3schools">www.bloodysweet.com</a>
  </footer>
    </div>
  );
};
export default Footer;