import {useRouteError} from "react-router-dom";
//special hooks used to handle erro
const Error=()=>{
const error=useRouteError();// gives you the error object
console.log(error);
    return(<h1>error</h1>)
}
export default Error; 