import ItemList from "./itemList";
import {useState} from "react"
const MenuDrop=({title,array,show,setshow})=>{
  
   console.log(setshow);
    // applying the  conecept of liftig the state up
    // and controlled and uncontrolled components
    
    return(
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
    <div onClick={()=>{
        setshow();
    }} className="flex justify-between cursor-pointer">
      <span className="font-bold text-lg">
        {title} 
      </span>
      <span>🔽</span>
    </div>
   
    {show && <ItemList items={array}/>}     
    
  </div>
    )
}
export default MenuDrop;