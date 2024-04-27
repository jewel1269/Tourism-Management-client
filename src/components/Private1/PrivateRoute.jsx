import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AddTouristsSpot from "../AddTourists Spot/AddTouristsSpot";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const location = useLocation()

    if(loading){
      return  <div className="w-16 h-16 border-4 lg:ml-[50%] lg:mt-32 lg:mb-32 bg-red-400 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if(user){
        return <AddTouristsSpot/>
    }
    return (<Navigate state={location.pathname} to={"/login"}></Navigate>);
};

export default PrivateRoute;