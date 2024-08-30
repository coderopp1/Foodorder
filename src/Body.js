import { useState, useEffect, useContext } from 'react';
import RestaurantCard  ,{isOpenRescard} from './Restraurantcard.js';
import Shimmer from './Shimmer.js';
import Usercontext from './utils/UserContext.js';

const Body = () => {
    // making reslist a state variable to update ui
    
    const [resList, setResList] = useState([]);// we will now never change this reslist it will remain same 
    const[filterList,setFilterList]=useState([]);
    let [search,setsearch]=useState("");
    console.log(RestaurantCard);
    const Openrescard=isOpenRescard(RestaurantCard);
    console.log(search);
  // the mock data sent by api
  // using the filter method to filter top rated restraunts
  // console.log(newList); this will conntain the updated list
  // triggering the State variable to make component re render
  // now with new relist only those restr will show with
  // we can only paa event object in callback of event listeners
  
  
   async function fetchdata(){
    const data=  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
    const json =await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants); 
    setResList(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilterList(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   
    
  }
  
  // useeffect calls the callback func after render of component is complete 
  useEffect(() => {
    fetchdata();
  },[]);
  

     // acessin g the user context  in this way
const {user,setLogger}=useContext(Usercontext);
// const {user}=data; // never try to get them to gether
console.log(setLogger);
setLogger("pizza");
console.log(setLogger)
console.log(user);
 // working 

  // this is done so that till api is fetching the data 
  // react will not render the return statement
  // instead it will render loading
  if(resList.length==0){
     return <Shimmer/>
  }
  
    return (
      <div className="bg-slate-100">
       
  
        {/*  search bar with top res button */}
        
<div className="flex items-center p-4 m-2 justify-start">
  


{/* <form class="w-3/12 mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          onChange={(e)=>{ setsearch(e.target.value)}}  placeholder="Search Restaaurants" required />

        <button type="submit" onClick={
            (event)=>{let newList = resList.filter(
            (res) => res.info.name.toLowerCase().includes(search.toLowerCase())
          )
            setFilterList(newList);
          }
          }
           class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
    </form> */}
     
     <div className="flex  ">
     <button  className="mx-9 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={(event)=>{
          // console.log(event); event object
         let newList = resList.filter((res) => res?.info?.avgRating > 4);
          setFilterList(newList);
        }}>top rated restraunts</button>


          <input type="text" placeholder="Search Food or Restaurant" className="rounded-lg shadow-md " onChange={(e)=>{
            setsearch(e.target.value)}} 
            />
          <button className="  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={
            (event)=>{let newList = resList.filter(
            (res) =>  res?.info?.name.toLowerCase().includes(search.toLowerCase())
          )
            setFilterList(newList);
           
          }
          }
          >Search</button>
      </div>
  
  
  
</div>
  
  
       
        <div className="res-container">
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
          {filterList.map((res) => (
            res?.info?.isOpen? <Openrescard  key={ res?.info?.id}  resData={res} />:
            <RestaurantCard key={ res?.info?.id}  resData={res} />
          ))}
  
          {/* // * or */}
  
          {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
        </div>
      </div>
    );
  }
 export default Body;  

 {// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer
}