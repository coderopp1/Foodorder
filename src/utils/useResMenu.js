 
 import { useEffect,useState } from "react";
 const useResMenu=(id)=>{
  let [menu,setmenu]=useState([]);
    const url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";

    useEffect(()=>{
        fetchdata();
        },[]);
    const fetchdata= async ()=>{
        const data= await fetch(url+id);
        const json =await data.json();
        //  previous data 
        // const newdata=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        const newdata=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        setmenu(newdata);
     } 
    
    //  console.log(menu);// first menu is printed empty
     // because of useEffect not beeing called 
     // after function return useeffect is called and then it fetchesthe data
     // after it updates the menu  and   now re renders the component
     return menu;
  
}
export default useResMenu;