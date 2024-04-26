import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AddTouristsSpot from "../AddTourists Spot/AddTouristsSpot";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user} =useContext(AuthContext)
    const location = useLocation()

    if(user){
        return <AddTouristsSpot/>
    }
    return (<Navigate state={location.pathname} to={"/login"}></Navigate>);
};

export default PrivateRoute;