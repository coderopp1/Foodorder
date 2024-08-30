const ItemList=({items})=>{
// console.log(items)
// console.log("hululul");
if(items?.length==0||items==undefined) return<></>
return(
    
    <div>
      {
    
      
      items.map((item) => (
        
        <div
          key={item.card?.info?.id||item?.title}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card?.info?.name||item?.title}</span>
              <span>
                - ₹
                {(item.card?.info?.price||item?.title)
                  ? (item.card?.info?.price||item?.title) / 100
                  : (item.card?.info?.defaultPrice||item?.title) / 100}
              </span>
            </div>
            <p className="text-xs">{item.card?.info?.description||item?.title}</p>

          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 ml-6  rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]">
                Add +
              </button>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );

    
}
export default ItemList;