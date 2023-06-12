import '../web/header.css';
import { Link } from 'react-router-dom';

const HeaderSec = ()=>{
    return(
    <>
    <div className=" heading container-fluid  d-flex align-items-center  mt-3 py-1 mb-5">
        <div className="Logo justify-content-between mx-5 ">BLOODY SWEET</div>
        <ul className=" parent-menu d-flex justify-contents-between navbar-expand-sm nav nav-bar px-5">
           <Link className="text-decoration-none" to="/"><li className="text-warning" ><a>Home</a></li></Link>
            <Link className="text-decoration-none" to="/about"><li className="text-secondary"><a className="anchor">About</a></li></Link>
            <Link className="text-decoration-none" to="/menu"><li className="text-secondary"><a className="anchor">Menu</a></li></Link>
            <Link className="text-decoration-none" to="/special"><li className="text-secondary"><a className="anchor">Special</a></li></Link>
            <Link className="text-decoration-none" to="/order"><li className="text-secondary"><a className="anchor">Order</a></li></Link>
            <Link className="text-decoration-none" to="/cart"><li className="text-secondary"><a className="anchor">Cart</a></li></Link>
        </ul>
        <div className="head-btn"><a className=" btn text-decoration-none text-warning bg-dark mx-5" href="#">Order</a></div>
    </div>
    </>
    )
}
export default HeaderSec;