import '../web/header.css';

const HeaderSec = ()=>{
    return(
    <>
    <div className=" heading container-fluid fixed-top d-flex align-items-center  mt-3 py-1 mb-5">
        <div className="Logo justify-content-between mx-5 ">BLOODY SWEET</div>
        <ul className=" parent-menu d-flex justify-contents-between nav nav-bar px-5">
            <li className="text-warning" ><a>Home</a></li>
            <li className="text-secondary"><a>About</a></li>
            <li className="text-secondary"><a>Menu</a></li>
            <li className="text-secondary"><a>Special</a></li>
            <li className="text-secondary"><a>Order</a></li>
            <li className="text-secondary"><a>Cart</a></li>
        </ul>
        <div className="head-btn"><a className=" btn text-decoration-none text-warning bg-dark mx-5" href="#">Order</a></div>
    </div>
    </>
    )
}
export default HeaderSec;