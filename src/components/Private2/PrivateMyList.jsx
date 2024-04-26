import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate,  useLocation } from "react-router-dom";
import MyList from "../MyList/MyList";


const PrivateMyList = ({children}) => {
    const {user} =useContext(AuthContext)
    const location = useLocation()

    if(user){
        return <MyList/>
    }
    return (<Navigate state={location.pathname} to={"/login"}></Navigate>);
}

export default PrivateMyList;