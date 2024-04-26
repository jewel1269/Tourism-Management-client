import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Countries from "../Countries/Countries";
import ViewDetails from "../Details/ViewDetails";
import AddTouristsSpot from "../AddTourists Spot/AddTouristsSpot";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
            path: "/countries",
            element:<Countries/>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
            path: "/details/:id",
            element: <ViewDetails/>
        },
        {
          path: "/addTourist",
          element: <AddTouristsSpot/>

        },
        
      ]
    },
  ]);
  
  export default router;