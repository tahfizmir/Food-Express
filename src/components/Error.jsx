import { useRouteError } from "react-router-dom";
// hook given by react-router-dom
const Error=()=>{
    const err = useRouteError();
    console.log(err); 
    return (
        <>
        <div>
            <h2>If you are seeing this page, there might be some change in the swiggy api structure that needs reconfiguring. </h2>
           <h3> {err.status} : {err.statusText} </h3>
        </div>
        </>
    )
}
export default Error;