
import ReactDOM from 'react-dom/client';
import Header from './Header.js'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import React, { useState } from 'react';
import About from './About.js'
import Contact from "./Contact";
import Body from './Body.js';
import Error from './Error.js';
import Reslayout from './Reslayout.js';
import UserContext from './utils/UserContext.js';

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const AppLayout = () => {
  // console.log(history); // history object
  /**this outline component replaces the eith 
    the children according to the route */


    // implimenting the context 
    // creating  local state variable to change values of the context variable
    // always check for provider p it is capital
    const name="elon";


    const [logger,setLogger] = useState(name);

  return (
   <UserContext.Provider value={{ user:logger, setLogger }}>
    <div className="app">
    <Header />
    <Outlet/>
    </div>
   </UserContext.Provider>
  );
};
// creating the routing config with createbrowser router 
const router = createBrowserRouter([
{
  path: "/",
  element:<AppLayout/>,
  errorElement: <Error/>,
  children:[
    // these all are are children to app layout
    // which wwill be rendered acc to the path provided
    {
      path:"/",
      element:<Body/>
    },
    {
      path: "/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restraurant/:id",
      element:<Reslayout/>
    },
   
  ]
},


]);

//to render the routing configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
