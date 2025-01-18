//import Readnow22 from '../src/component/footer/readnow'
//import Footer from './component/footer/footer/Footer1';
//import './App.css';
import Home from './component/footer/home';
import Story from "./component/Story/story";
//import Blog from "./component/Latest article/latest"
import Fair from './component/button/fair/Fair';
import Entercode from "./component/icons/profile/Entercode";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/icons/profile/Login";
import Trust from "./component/button/fair/mifukoTrust/Trust"
import Profile from "./component/icons/profile/Profile";
import Shopbasket from './component/shopbasket/Shopbasket';
import Saboutus from './component/button/our story/Saboutus';
import Footerbtn from './component/innercomponent/temp/Footerbtn';
import ArtisanAfrica from './component/innercomponent/Artisan/ArtisanAfrica';
import Bcorps from './component/button/fair/Bcorps';


let allroute=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/story',
      element:<Story />
    },
    {
      path:'/profile',
      element:<Profile />
    },
    {
      path:'/Entercode',
      element:<Entercode />
    },
    {
      path:'/Login',
      element:<Login />
    },
    {
      path:'/fair',
      element:<Fair />
    },
    {
      path:'/basket',
      element:<Shopbasket />
    },
    {
      path:'/mifukotrust',
      element:<Trust />
    },
    {
      path:'/saboutus',
      element:<Saboutus />
    },
    {
      path:'/temp',
      element:<Footerbtn />
    },
    {
      path:'/Artisanafrica',
      element:<ArtisanAfrica />
    },
    {
      path:'/Bcorps',
      element:<Bcorps />
    },
    // {
    //   path:'/blog',
    //   element:<Blog />
    // },

    

  ]
);
function App() {
  return (
    <RouterProvider router={allroute} />
  );
}

export default App;


