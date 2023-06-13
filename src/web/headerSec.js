import '../web/header.css';
import { Link } from 'react-router-dom';

const HeaderSec = ()=>{
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
        <a href="#" className="navbar-brand mx-3 ">BLOODY SWEET</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-5  px-5">
               <Link className="text-decoration-none" to="/"><a href="#" className="nav-item nav-link active text-warning mx-4">Home</a></Link>
                <Link className="text-decoration-none" to="/menu"><a href="#" className="nav-item nav-link anchor mx-4">Menu</a></Link>
                   <Link className="text-decoration-none" to="/about"><a href="#" className="nav-link dropdown-toggle anchor mx-4">About</a></Link>
                <Link to="/special" className="text-decoration-none"><a className="nav-item nav-link anchor mx-4 " href="#">Special</a></Link>
               <Link className="text-decoration-none" to="/cart"> <a href="#" className="nav-item nav-link anchor mx-4 ">Cart</a></Link>
            </div>
            <div className="navbar-nav ms-auto">
                <Link className="text-decoration-none" to="/order"><a href="#" className="nav-item nav-link btn text-decoration-none text-warning bg-dark mx-5">Orders</a></Link>
            </div>
        </div>
    </div>
</nav>
    </>
    )
}
export default HeaderSec;