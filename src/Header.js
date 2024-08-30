import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import useNetwork from './utils/useNetwork';

//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

const Header = () => {
    let [btnname,setBtnname]=useState("login");
    // fetching the satus of the website through event listener 
    const status=useNetwork();
   
     function toggle(){
     //  btnname="logout";
      // btn name is changed to logout but to trigger a re render we will now use 
      // state variable
      console.log(btnname);
      if(btnname=="logout"){
       setBtnname("login");
      }else{
       setBtnname("logout");
      }


     }
     return (
       <div className="flex flex-wrap justify-between p-4 shadow-lg bg-sky-100   hover:bg-sky-200">
         <div className="logo-container">
           <img
             src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
             alt="App Logo"
             className="w-[100px] cursor-pointer"
           />
         </div>
         <div className="flex flex-wrap justify-center items-center p-2 m-2">
          

           <button class="  mx-6 bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
           status {status? "connected":"disconnected"}
           </button>
           <button class="    mx-6 bg-transparent hover:rounded-xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
           <Link to ="/about">About Us</Link>
           </button>
           <button class="  mx-6 bg-transparent hover:rounded-xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
           <Link to ="/contact">Contact Us</Link>
           </button>       
           <button   onClick={()=>{toggle()}} class="  hover:rounded-xl mx-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
           {btnname}
            </button>
            {/* <li> status {status? "connected":"disconnected"}</li>
             <li className=''><Link to ="/">Home</Link></li>
             <li><Link to ="/about">About Us</Link></li>
             <li> <Link to ="/contact">Contact Us</Link></li>
             <li>Cart</li>
             <button onClick={()=>{toggle()}}>{btnname}</button>
 */}

           
         </div>
       </div>
     );
   };
export default Header;   