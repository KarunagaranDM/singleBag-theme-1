import '../web/header.css';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  

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
                <Link className="text-decoration-none" to="/menu"><a href="#" className="nav-item nav-link anchor mx-2">Menu</a></Link>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle mx-5" data-bs-toggle="dropdown">About</a>
                    <div class="dropdown-menu mx-4">
                        <Link className="text-decoration-none" to="/special"><a href="#" class="dropdown-item">Account</a></Link>
                        <a href="#" class="dropdown-item">Service</a>
                        <Link className="text-decoration-none" to="/about"><a href="#" class="dropdown-item">Delivery</a></Link>
                    </div>
                </div>
                <Link to="/special" className="text-decoration-none"><a className="nav-item nav-link anchor mx-1 " href="#">Special</a></Link>
               <Link className="text-decoration-none" to="/cart"> <a href="#" className="nav-item nav-link anchor mx-1 ">Cart</a></Link>
            </div>
            <div className="navbar-nav ms-auto">
                <Link className="text-decoration-none" to="/order"><a href="#" className="nav-item nav-link btn text-decoration-none text-warning bg-dark mx-1">Orders</a></Link>
            </div>
            <IconButton className="text-white" aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
        </div>
    </div>
</nav>
    </>
    )
}
export default HeaderSec;