import { useState,useEffect } from "react";
 const useNetwork = ()=>{
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
      window.addEventListener('offline', () => {
        setOnlineStatus(false);
      });
  
      window.addEventListener('online', () => {
        setOnlineStatus(true);
      });
    }, []);
    // this useeffect adds event listener after the first render
    // when connection is lost the setOnlineStatus is called 
    // thereby  a re render of the whole component 

  
    // * boolean value
    return onlineStatus;
 }
 export  default  useNetwork;