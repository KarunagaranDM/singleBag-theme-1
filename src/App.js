import './App.css';
import Rooter from './web/root';
import HeaderSec from './web/headerSec';
import background from '../src/images/background.jpeg';
import BodySec from './web/bodySec';
import CondentSec from './web/condrnt';
import SwipeableTemporaryDrawer from './web/menuSec';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="background container-fluid">
        <HeaderSec/><br/>
        <BodySec/>
        <CondentSec/>
        <SwipeableTemporaryDrawer/>
    </div>
  )
};
export default App;
