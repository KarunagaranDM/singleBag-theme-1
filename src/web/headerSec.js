import "../web/header.css";
import { Link } from "react-router-dom";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import SwipeableTemporaryDrawer from "./menuSec";
import Swal from 'sweetalert2';
import SimpleDialogDemo from "./dialog";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const HeaderSec = () => {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClicker = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
   const handleAlert = ()=>{
    Swal.fire('Oh No!','Confirm You Leave','warning')
   }

    const handleClick = () => {
        Swal.fire('Hello!', 'Your own Dashboard!', 'success');
      };
      const cartClick =()=>{
        Swal.fire('Happy Purchase!','Your Cart Items!','success')
      }
  const [activeSection, setActiveSection] = [useState];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand mx-3 ">
            BLOODY SWEET
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-5  px-5">
              <Link className="text-decoration-none" to="/">
                <a
                  href="#"
                  className="nav-item nav-link active text-warning mx-4"
                >
                  Home
                </a>
              </Link>
              <Link className="text-decoration-none" to="/special">
                <a href="#" className="nav-item nav-link anchor mx-2">
                  Menu
                </a>
              </Link>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle mx-5"
                  data-bs-toggle="dropdown"
                >
                  About
                </a>
                <div class="dropdown-menu mx-4">
                  <Link className="text-decoration-none" to="/achievements">
                    <a href="#" class="dropdown-item">
                      Achievements
                    </a>
                  </Link>
                  <Link className="text-decoration-none" to="/service"><a href="#" class="dropdown-item">
                    Service
                  </a></Link>
                  <Link className="text-decoration-none" to="/about">
                    <a href="#" class="dropdown-item">
                      Delivery
                    </a>
                  </Link>
                </div>
              </div>
              <Link to="/special" className="text-decoration-none">
                <a className="nav-item nav-link anchor mx-1 " href="#">
                  Special
                </a>
              </Link>
              
                <a href="#" className="nav-item nav-link anchor mx-1 ">
                  <SimpleDialogDemo/>
                </a>
            </div>
            <div className="navbar-nav ms-auto">
              <div>
                <a id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClicker}
                  href="#"
                  className="nav-item nav-link  text-decoration-none text-warning bg-dark"
                >
                  <RxAvatar  />
                </a>
              
              <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <Link to="/user" className="text-decoration-none text-dark"><MenuItem onClick={handleClick}>My account</MenuItem></Link>
        <MenuItem onClick={handleAlert}>Logout</MenuItem>
      </Menu>
    </div>
              <IconButton className="nav-item nav-link text-warning bg-dark cart" aria-label="cart"onClick={cartClick}>
  <StyledBadge badgeContent={4} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
            </div>
          
          </div>
        </div>
      </nav>
      <br />
      <br />
    </>
  );
};
export default HeaderSec;
