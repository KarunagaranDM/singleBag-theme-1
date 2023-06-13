import { createBrowserRouter } from "react-router-dom";
import Cart from "./cart";
import BodySec from "./bodySec";
import App from "../App";
import About from "./about";
import Menu from "./menu";
import Special from "./special";
import Order from "./order";
import Location from "./location";


const RouterApp = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <BodySec/>
        },
        {
            path: "/about",
            element: <About />,

          },

          {
            path: "/menu",
            element: <Menu />
          },{
            path:"/special",
            element:<Special/>
          },{
            path:"/order",
            element:<Order/>
          },{
            path:"/cart",
            element:<Cart/>
          },{
            path:"/locate",
            element:<Location/>
          }
      ],
    },
  ]);
  export default RouterApp;