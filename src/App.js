import './App.css';
import Rooter from './web/root';
import HeaderSec from './web/headerSec';
import background from '../src/images/background.jpeg';
import BodySec from './web/bodySec';
import CondentSec from './web/condrnt';
import SwipeableTemporaryDrawer from './web/menuSec';
import CssBaseline from '@mui/material/CssBaseline';
import OrderSec from './web/aos';
import CollapseSec from './web/round';
import ProductSec from './web/product';
import InfoSec from './web/infoSec';
import MapSec from './web/map';
import Footer from './web/footer';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ScrollButton from './web/tooltip';
import SliderPro from './web/sliderView';
import Spinner from './web/spinner';
import ProductAdsSlider from './web/bumbAdd';
import React, { useState, useEffect } from 'react';
import Loader from './web/shimmer';
import YourComponent from './web/topSec';
function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App ">
        <HeaderSec/><br/>
        <Outlet/>
        <br/>
        <ProductAdsSlider/>
        <CondentSec/>
        <SwipeableTemporaryDrawer/>
        <OrderSec/>
        <CollapseSec/>
        <ProductSec/>
        <br/><br/>
        <MapSec/>
        <Footer/>
        
    </div>
  )
};
export default App;
