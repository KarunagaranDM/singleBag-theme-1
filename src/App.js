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
function App() {
  return (
    <div className="background container-fluid ">
        <HeaderSec/><br/>
        <Outlet/>
        <CondentSec/>
        <SwipeableTemporaryDrawer/>
        <OrderSec/>
        <CollapseSec/>
        <ProductSec/>
        <InfoSec/>
        <MapSec/>
        <Footer/>
        <ScrollButton/>
    </div>
  )
};
export default App;
