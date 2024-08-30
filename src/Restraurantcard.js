import {Link} from "react-router-dom";
import react from "react";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      id,
      sla
    } = resData?.info;
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
        {cuisines.join(', ')}
        </p>
        <button className="  mx-1 my-2 bg-transparent hover:rounded-xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  py-2 px-4 border border-blue-500 hover:border-transparent rounded"><Link to={"/restraurant/"+id}> check menu</Link></button>
      </div>
      <div className="px-6 pt-1 pb-1">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{avgRating} stars</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">₹{costForTwo} FOR TWO</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{sla.deliveryTime} minutes</span>
      </div>
    </div>
    
    
    );
  };
  
  export const isOpenRescard=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
    <span className= " absolute bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-blue-400 border border-blue-400 bg-inherit">Open</span>
    <RestaurantCard {...props}/>
    
      </div>
    );
  }
}
  export default RestaurantCard;

  {// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });

// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

}