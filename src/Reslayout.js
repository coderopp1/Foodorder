
import useResMenu from './utils/useResMenu';
import { useParams } from 'react-router-dom';
import Shimmermenu from "./Shimmermenu";
import MenuDrop from './MenuDrop';
import { useState } from "react";




const Reslayout=()=>{


const [showindex,setshowindex]=useState(0);
// if the show index is equal to the index of the menudrop index passed by the map function then 
// pass the show prop as true which will expand the items in menu
// also pass the setshowindex function  to the menudrop as it will need 
// it to open expant its item when it is clicked it will help menudrop to change showindex value and close all other 
// menudrop because due to the state render all menudrop will be rendered again 




let { id } = useParams();
// fetching the data form our own created hooks
const menu = useResMenu(id);
console.log(menu);

// will trigger a re render when the data comes in 
// before data is fetched by the api it will give menu the default value
// empty
// hence shimmer ui will be displayed
if ( menu.length === 0) {
    return <Shimmermenu />;
  }
  



    return (
        <div className='flex justify-center w-screen'>
          <div>
            <div className='flex flex-wrap m-5 items-center justify-center'>
              <span className='mx-4'>restaurant name </span>
              <span className='mx-4'> menu </span>
              <span className='mx-4'> cuisines </span>
            </div>
            <div className='items-center justify-center w-screen'>
              {menu.map((res, index) => {
                if(index!=0&&(res.card.card.title)){
                    return <MenuDrop title={res.card.card.title} 
                    array={res.card.card.categories||res.card.card.itemCards} 
                    show={showindex==index?true:false} 
                    key={index}
                    setshow={()=>setshowindex(index)}  /*  whenever setshoew is called it will update the value of showindex to index *//>;

                }
                return ;
                
              })}
            </div>
          </div>
        </div>
      );

}
export default Reslayout;